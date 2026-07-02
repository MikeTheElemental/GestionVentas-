const { registrarVenta } = require("./ventas");
const { registrarCompra } = require("./compras");
const { consultarStock } = require("./stock");
const { generarReporte } = require("./reportes");

console.log("==================================");
console.log(" Sistema de Gestión de Ventas ");
console.log("==================================");

registrarVenta();
registrarCompra();
consultarStock();
generarReporte();
