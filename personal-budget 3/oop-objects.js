// Función constructora Movimiento
function Movimiento(descripcion, monto, tipo) {
  this.descripcion = descripcion;
  this.monto = parseFloat(monto);
  this.tipo = tipo;
}

// Presupuesto con encapsulamiento de datos
function Presupuesto() {
  this.movimientos = [];
}

Presupuesto.prototype.agregarMovimiento = function(movimiento) {
  this.movimientos.push(movimiento);
};

Presupuesto.prototype.getIngresos = function() {
  return calcularTotal(this.movimientos, 'ingreso');
};

Presupuesto.prototype.getEgresos = function() {
  return calcularTotal(this.movimientos, 'egreso');
};

Presupuesto.prototype.getSaldo = function() {
  return this.getIngresos() - this.getEgresos();
};
