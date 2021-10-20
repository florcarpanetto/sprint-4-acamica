const suma = (a, b) => a+b;
const resta = (a, b) => a-b;

const division = (a, b) => {
    try {a/b}
    catch(err) {
        console.err(err)
    }
    finally {return 0}
};
