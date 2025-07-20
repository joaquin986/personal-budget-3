const presupuesto = new Presupuesto();
const form = document.getElementById("form-movimiento");
const lista = document.getElementById("lista-movimientos");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const desc = document.getElementById("descripcion").value;
  const monto = document.getElementById("monto").value;
  const tipo = document.getElementById("tipo").value;

  if (desc && monto && tipo) {
    const nuevo = new Movimiento(desc, parseFloat(monto), tipo);
    presupuesto.agregarMovimiento(nuevo);
    actualizarUI();
    form.reset();
  }
});

function actualizarUI() {
  lista.innerHTML = "";
  presupuesto.movimientos.forEach((mov) => {
    const item = document.createElement("li");
    item.textContent = `${mov.descripcion} - ${mov.tipo === "ingreso" ? "+" : "-"}$${mov.monto}`;
    lista.appendChild(item);
  });

  document.getElementById("total-ingresos").textContent = presupuesto.getIngresos();
  document.getElementById("total-egresos").textContent = presupuesto.getEgresos();
  document.getElementById("saldo").textContent = presupuesto.getSaldo();
}

function exportarMovimientos() {
  const data = JSON.stringify(presupuesto.movimientos, null, 2);
  console.log("Exportando movimientos a JSON:", data);
  alert("Movimientos exportados. Revisa la consola (F12)");
}

function borrarMovimientos() {
  if (confirm("¿Estás seguro de borrar todos los movimientos?")) {
    presupuesto.movimientos = [];
    actualizarUI();
    alert("Todos los movimientos han sido eliminados.");
  }
}

function guardarEnLocalStorage() {
  const data = JSON.stringify(presupuesto.movimientos);
  localStorage.setItem("misMovimientos", data);
  alert("Datos guardados correctamente en localStorage.");
}
