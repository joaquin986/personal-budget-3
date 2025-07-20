// Funciones puras para calcular totales
function calcularTotal(movimientos, tipo) {
  return movimientos
    .filter(m => m.tipo === tipo)
    .reduce((suma, m) => suma + m.monto, 0);
}
