import Slide from "./js/slide.js";

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();

// -------------------------------------------

const rangeInput = document.querySelector(".range-input input"),
  priceInput = document.querySelector(".price-input input"),
  progress = document.querySelector(".slider .progress"),
  priceElement = document.querySelector(".price");

let liberado;

priceInput.addEventListener("input", () => {
  let minVal = parseInt(priceInput.value);

  if (minVal <= 3000) {
    rangeInput.value = minVal;
    progress.style.right = 100 - (minVal / rangeInput.max) * 100 + "%";
    liberado = minVal / 0.027;

    const formatoBR = {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    priceElement.innerText = liberado.toLocaleString("pt-BR", formatoBR);
  }
});

rangeInput.addEventListener("input", () => {
  let minVal = parseInt(rangeInput.value);
  priceInput.value = minVal;

  progress.style.right = 100 - (minVal / rangeInput.max) * 100 + "%";

  liberado = minVal / 0.027;

  const formatoBR = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  priceElement.innerText = liberado.toLocaleString("pt-BR", formatoBR);
  verificarValor(priceInput);
});

//aviso

function verificarValor(input) {
  const valorMaximo = 3000;
  const avisoElement = document.getElementById("aviso");

  if (input.value > valorMaximo) {
    avisoElement.innerText = "O valor não deve ultrapassar 3000.";
    input.classList.add("invalid");
  } else {
    avisoElement.innerText = "";
    input.classList.remove("invalid");
  }
}
