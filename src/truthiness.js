const isEven = (a) => a % 2 === 0;

const divide = (a,b) => {
    if (b !== 0) {
        return a / b;
    }
    throw new Error('invalid input');
    return null;
}


module.exports = {isEven, divide}