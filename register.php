<?php
session_start();

// Połączenie z bazą
$host = "localhost";
$dbname = "DaylyPressureTracker";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST["username"]);
    $password = $_POST["password"];

    // Sprawdź czy użytkownik istnieje
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "Użytkownik o tej nazwie już istnieje.";
    } else {
        // Hashowanie hasła
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Dodanie użytkownika
        $insert = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        $insert->bind_param("ss", $username, $hashedPassword);

        if ($insert->execute()) {
            echo "Rejestracja zakończona sukcesem! Możesz się zalogować.";
            header("Location: index.html"); // przekierowuje na stronę główną
            exit;
        } else {
            echo "Błąd podczas rejestracji.";
        }
        $insert->close();
    }
    $stmt->close();
}
$conn->close();
?>
