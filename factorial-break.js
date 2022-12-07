const factorial = valor => {
    var respuesta = 1
    let i = 1
    while (i <= valor){
        if(!i % 2 == 0) {
            console.log(respuesta *= i);
        }

        i++;
    }
    return respuesta;
}
console.log(factorial(10));