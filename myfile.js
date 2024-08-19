function getSum(array){
    const suma = array.reduce((sumando, numero) => sumando + numero, 0);
    console.log(suma);
};

const numeros = [18, 22, 4, 65, 5];
getSum(numeros);