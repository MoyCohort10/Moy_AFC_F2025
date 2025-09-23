
const isPalidrome = (str) =>{
    if(typeof str !== 'string')
        return false;
    const object = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return object === object.split('').reverse().join('');
}

module.exports = {
    isPalidrome
}
