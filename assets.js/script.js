"use stric";

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura)) {
    alert("Digite valores válidos para calcularmos o seu IMC");
    return;
  }

  const bmi = peso / (altura * altura);

  if (isNaN(bmi)) {
    alert("#Digite valores válidos para calcularmos o seu IMC");
  } else {
    alert(`Seu IMC está em ${bmi.toFixed(2)}`);
  }
});
