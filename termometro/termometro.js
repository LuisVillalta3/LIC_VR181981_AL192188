document.getElementById("aKelvin").addEventListener("click", aKelvin);
const result = document.getElementById("result");

function aKelvin() {
  const kelvin = Number(prompt("Introduce la temperatura en Kelvin"));

  if (kelvin === NaN) {
    alert("Ingrese un número");
    return;
  }

  const celsius = kelvin - 273.15;
  const fahrenheit = celsius * (9 / 5) + 32;

  result.innerHTML = `
    <h2>Resultado</h2>
    <p>${kelvin}K = ${celsius}°C = ${fahrenheit}°F</p>
  `;

  cambiarColor(kelvin, "K");
}

document.getElementById("aFahrenheit").addEventListener("click", aFahrenheit);

function aFahrenheit() {
  const fahrenheit = Number(prompt("Introduce la temperatura en fahrenheit"));

  if (fahrenheit === NaN) {
    alert("Ingrese un número");
    return;
  }

  const celsius = (fahrenheit - 32) * (5 / 9);
  const kelvin = celsius + 273.15;

  result.innerHTML = `
    <h2>Resultado</h2>
    <p>${fahrenheit}°F = ${celsius}°C = ${kelvin}K</p>
  `;

  cambiarColor(fahrenheit, "F");
}

document.getElementById("aCelsius").addEventListener("click", aCelsius);

function aCelsius() {
  const celcius = Number(prompt("Introduce la temperatura en celcius"));

  if (celcius === NaN) {
    alert("Ingrese un número");
    return;
  }

  const kelvin = celcius + 273.15;
  const fahrenheit = celcius * (9 / 5) + 32;

  result.innerHTML = `
    <h2>Resultado</h2>
    <p>${celcius}°C = ${kelvin}K = ${fahrenheit}°F</p>
  `;

  cambiarColor(celcius, "C");
}

function cambiarColor(valor, tipo) {
  const body = document.querySelector("body");
  if (tipo === "K") {
    if (valor <= 273.15) {
      body.style.backgroundColor = "skyblue";
    } else if (valor >= 310.15) {
      body.style.backgroundColor = "red";
    } else {
      body.style.backgroundColor = "green";
    }
  } else if (tipo === "C") {
    if (valor < 0) {
      body.style.backgroundColor = "skyblue";
    } else if (valor > 34) {
      body.style.backgroundColor = "red";
    } else {
      body.style.backgroundColor = "green";
    }
  } else if (tipo === "F") {
    if (valor <= 32) {
      body.style.backgroundColor = "skyblue";
    } else if (valor > 98.6) {
      body.style.backgroundColor = "red";
    } else {
      body.style.backgroundColor = "green";
    }
  }
}
