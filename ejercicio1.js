const movimientos = [5000, 10000, -25000, 30000, -15000, 50000];
let total = 0;
let cantidadRetiros = 0;

for (const transacciones of movimientos) {
    total += transacciones;
    if (transacciones < 0) {
        cantidadRetiros++;
    }
    console.log(transacciones);
}
console.log(`Tu disponible es: ${total}`);
console.log(`La cantidad de retiros es: ${cantidadRetiros}`);