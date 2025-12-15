const loginModal = document.getElementById("loginModal");
const menuIcon = document.getElementById("Burger");
const switchIcon = document.getElementById("switch-icon");

window.addEventListener("click", (event) => {
  if (event.target !== menuIcon || event.target === menuIcon && document.getElementById("Menu-box").style.display === "block") {
    closeMenu();
  }
  else if (event.target === menuIcon && (document.getElementById("Menu-box").style.display === "none" || document.getElementById("Menu-box").style.display === "")) {
    openMenu();
  }
});
function openMenu() {
  const menu = document.getElementById("Menu-box");
  menu.style.display = "block";
}
function closeMenu() {
  const menu = document.getElementById("Menu-box");
  menu.style.display = "none";
}


function openModal() {
  document.getElementById("loginModal").style.display = "block";
}
function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}
function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}
function showLogin() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}


window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    closeModal();
  }
});

function togglePassword(id, eyeId) {
  const input = document.getElementById(id);
  const eye = document.getElementById(eyeId);
  if (input.type === "password") {
    input.type = "text";
    eye.src = "images/OpenEye.png";
  } else {
    input.type = "password";
    eye.src = "images/CrossedEye.png";
  }
}

window.addEventListener("mouseover", (event) => {
  if (event.target === switchIcon) {
    SwitchLD();
  }
});

function SwitchLD() {
  const body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
}

const ctxLine = document.getElementById("pressureChart").getContext("2d");
new Chart(ctxLine, {
  type: "line",
  data: {
    labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"],
    datasets: [{
      label: "Ciśnienie Rozkurczowe",
      data: [120, 118, 122, 121, 119, 117, 123],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
      tension: 0.05
    }, {
      label: "Ciśnienie Skurczowe",
      data: [120, 125, 130, 128, 122, 135, 129],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.05
    }]
  }
});

fetch("icons.json")
  .then(res => res.json())
  .then(data => {
    // Tworzymy mapę ikon po id
    const icons = {};
    data.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        el.innerHTML = item.svg + (el.innerHTML || "");
      }
      else {
        console.warn(`Nie znaleziono elementu o id: ${item.id}`);
      }
      icons[item.id] = item.svg;
    });

    // Wstawiamy ikony w różne miejsca
    document.getElementById("profile-icon").innerHTML = icons["profile-icon"];
    document.getElementById("home-icon").innerHTML = icons["home-icon"];
    document.getElementById("stats-icon").innerHTML = icons["stats-icon"];
    document.getElementById("settings-icon").innerHTML = icons["settings-icon"];
    document.getElementById("calendar-icon").innerHTML = icons["calendar-icon"];
    document.getElementById("mode-icon").innerHTML = icons["mode-icon"];
    document.getElementById("logout-icon").innerHTML = icons["logout-icon"];
    document.getElementById("login-icon").innerHTML = icons["login-icon"];
    document.getElementById("switchOn-icon").innerHTML = icons["switchOn-icon"];
    document.getElementById("switchOff-icon").innerHTML = icons["switchOff-icon"];
    document.getElementById("switchbetween-icon").innerHTML = icons["switchbetween-icon"];
    document.getElementById("EyeOpen-icon").innerHTML = icons["EyeOpen-icon"];
    document.getElementById("EyeClosed-icon").innerHTML = icons["EyeClosed-icon"];
    document.getElementById("BurgerMenu-icon").innerHTML = icons["BurgerMenu-icon"];
    document.getElementById("Edit-icon").innerHTML = icons["Edit-icon"];
    document.getElementById("Email-icon").innerHTML = icons["Email-icon"];
    document.getElementById("EmptyCheckbox-icon").innerHTML = icons["EmptyCheckbox-icon"];
    document.getElementById("FilledCheckbox-icon").innerHTML = icons["FilledCheckbox-icon"];
  })
  .catch(err => console.error("Błąd wczytywania JSON:", err));

