let body = document.body;
let info = document.getElementById("info");
let home = document.getElementById("home");
let mode = document.getElementById("mode");

const darkLimit = 5;
let darkClick = 0;
let darkRemain;

function darkMode() {
  if (darkRemain == 1) {
    info.textContent = `Jatah Mode telah habis`;
    mode.style.display = "none";
    home.textContent = `Restart`;
    return;
  }

  darkRemain % 2 == 0
    ? (mode.textContent = `Light`)
    : (mode.textContent = `Dark`);

  darkClick += 1;
  darkRemain = darkLimit - darkClick;

  info.textContent = `click mode used ${darkClick} and remains ${darkRemain}`;
  body.classList.toggle("dark");
}

function render() {
  location.reload();
}
