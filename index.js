const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const division = (a, b) => {
    try { a / b }
    catch (err) {
        console.err(err)
    }
    finally { return 0 }
};

const promedio = suma / 2;

const multiplicacion = (a, b) => a * b;

const porcentaje = (a, b) => b*100/a