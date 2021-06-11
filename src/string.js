const reverseStr = (str) => {
    if (!str){
        return null;
    }
    return str.split('').reverse().join('')
}


module.exports = { reverseStr}