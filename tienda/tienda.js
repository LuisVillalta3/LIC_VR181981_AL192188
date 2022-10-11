const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const table = document.getElementById("table");

const form = document.getElementById("form");
form.addEventListener("submit", agregarProducto);

const total = document.getElementById("total");
total.innerText = formatter.format(0);

const productosLst = [];

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

function obtenerTotal() {
  const total = productosLst.reduce(
    (total, producto) => (total += producto.precio),
    0
  );

  return formatter.format(total);
}

function agregarProducto(event) {
  event.preventDefault();
  const nombre = document.getElementById("producto");
  const precio = document.getElementById("precio");

  if (campoVacio(nombre) || campoVacio(precio)) {
    alert("Por favor, rellena todos los campos");
    return false;
  }

  const producto = {
    nombre: nombre.value,
    precio: Number(precio.value),
  };

  productosLst.push(producto);

  total.innerText = obtenerTotal();
  agregarColumna();
}

function agregarColumna() {
  const tbody = table.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  productosLst.forEach((p, i) => {
    tbody.innerHTML += `
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${p.nombre}</td>
        <td>${formatter.format(p.precio)}</td>
      </tr>
    `;
  });
}
