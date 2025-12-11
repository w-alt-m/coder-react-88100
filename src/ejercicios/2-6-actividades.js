/* Actividades prácticas
Actividad 1: Transformando Arrays
Implementar un polyfills del método map de los arrays. Debemos suponer que los navegadores no son compatibles con este método y debemos implementarlo para que todos puedan usarlo en nuestra aplicación.

💡Tips

Es necesario utilizar el objetos this, que en este caso va a hacer referencia al dueño de la función map que es ejecutada. Por eso mismo, necesitaremos de una función regular y no una arrow function. Recordar que necesitamos RETORNAR el array transformado. */

Array.prototype.miMap = function (callback) {

    const nuevoArray = []
    const arrayOriginal = this;

    for (let i = 0; i < arrayOriginal.length; i++) {
        const nuevoElemento = callback(arrayOriginal[i], i, arrayOriginal)
        nuevoArray.push(nuevoElemento)
    }

    return nuevoArray;
}

// Prueba

const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros.miMap((n, i, array) => {

    if (i === 0) {
        console.log(array);
    }

    console.log(i)

    return n * 10

})

console.log(resultado)

/* Actividad 2: Filtrando Arrays
Del mismo modo podemos implementar un polyfill para el método filter de los Arrays.

💡Tips

Entender el funcionamiento de estos métodos nos ayudará a comprender los principios de inmutabilidad de la programación funcional. Esto utiliza React para poder hacer la manipulación del DOM de forma performante. No olvidar que necesitamos RETORNAR un array con los elementos que cumplen con la condición del filtro, por lo que dentro necesitaremos de un IF. */

Array.prototype.miFilter = function (callback) {

    const nuevoArray = [];
    const arrayOriginal = this;

    for (let i = 0; i < arrayOriginal.length; i++) {

        const nuevoElemento = callback(arrayOriginal[i], i, arrayOriginal)

        if (nuevoElemento) {
            nuevoArray.push(arrayOriginal[i]);
        }
    }

    return nuevoArray;
}

// Prueba

console.log("///////////////// Ejercicio 2 /////////////////");

const resultado2 = numeros.miFilter((n, i, array) => {

    if (i === 0) {
        console.log(array);
    }

    console.log(i);

    return n > 3;

})

console.log(resultado2);

/* Actividad 3: Botón Multiuso II
En un componente botón no es tan cómodo establecer su label como si fuese un atributo, sino que sería más fácil de entender si el texto lo escribo como hijo del componente. Aplicar la prop children para esto.

💡 Tips

En un componente botón no es tan cómodo establecer su label como si fuese un atributo, sino que sería más fácil de entender si el texto lo escribo como hijo del componente. Aplicar la prop children para esto. */