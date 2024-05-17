const menu = document.querySelector("svg");
menu.addEventListener("click", morph);

function morph() {
  menu.classList.toggle("open");
}

function abrirMenu() {
  if (itens.style.display == "block") {
    itens.style.display = "none";
  } else {
    itens.style.display = "block";
  }
}

function abrirHtml() {
  document.getElementById("html").style.display = "block";
}

function esconderHtml() {
  document.getElementById("html").style.display = "none";
}

function abrirCss() {
  document.getElementById("css").style.display = "block";
}

function esconderCss() {
  document.getElementById("css").style.display = "none";
}

function abrirJavascript() {
  document.getElementById("javascript").style.display = "block";
}

function esconderJavascript() {
  document.getElementById("javascript").style.display = "none";
}

function abrirSql() {
  document.getElementById("sql").style.display = "block";
}

function esconderSql() {
  document.getElementById("sql").style.display = "none";
}

function abrirProjetos() {
  document.getElementById("mostrar-projetos").style.display = "block";
}

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");
elements.forEach((Element) => myObserver.observe(Element));

const el = document.querySelector("#sobre");
const sobre = "Jescklay Matos.";
const interval = 200;

function showText(el, text, interval) {
  const char = sobre.split("").reverse();
  const typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }

    const next = char.pop();

    el.innerHTML += next;
  }, interval);
}

showText(el, sobre, interval);

/*-----------------------------------*/
