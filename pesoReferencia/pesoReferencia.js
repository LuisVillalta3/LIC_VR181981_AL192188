const form = document.getElementById("form");

form.addEventListener("submit", calcularPeso);

function calcularPeso(event) {
  event.preventDefault();

  const { peso, sexo, edad, altura } = formValido();

  let pesoCalculado = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4;
  if (sexo === "m") pesoCalculado *= 0.9;

  document.getElementById("pesoAproximadoLbl").innerText = pesoCalculado;
  document.getElementById("pesoActualLbl").innerText = peso;
  document.getElementById("sexoLbl").innerText = sexo;
  document.getElementById("edadLbl").innerText = edad;
  document.getElementById("alturaLbl").innerText = altura;
}

function campoVacio(campo) {
  const valor = campo.value;
  campo.classList.remove("border-danger");

  const estaVacio =
    valor === "" ||
    valor === null ||
    valor === undefined ||
    valor === 0 ||
    valor === "0";

  if (estaVacio) {
    campo.classList.add("border-danger");
  }

  return estaVacio;
}

function formValido() {
  const peso = document.getElementById("pesoActual");
  const sexo = document.getElementById("sexo");
  const edad = document.getElementById("edad");
  const altura = document.getElementById("altura");

  if (
    campoVacio(peso) ||
    campoVacio(sexo) ||
    campoVacio(edad) ||
    campoVacio(altura)
  ) {
    alert("Por favor, rellena todos los campos");
    return false;
  }
  return {
    peso: peso.value,
    sexo: sexo.value,
    edad: edad.value,
    altura: altura.value,
  };
}
