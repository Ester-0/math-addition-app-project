// Buena suerte!

// 1. Genera dos números aleatórios y guárdalos en dos variables
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

document.querySelector("#primary-number").textContent = num1;
document.querySelector("#secondary-number").textContent = num2;

// 2. Haz la suma de dichos números y guardala en otra variable
const sum = num1 + num2;
console.log("esto suma " + sum);

// 3. Cuando el usuario haga clic en el botón, debes comprobar si la suma que has calculado es igual al valor que ha introducido el usuario.
const button = document.querySelector("#btn");

button.addEventListener("click", function () {
    const sumGuess = Number(document.querySelector("#guess").value);
    let message = document.querySelector("#message").innerHTML;

    if (sum == sumGuess) {
        //document.querySelector("#message").textContent = "La suma es correcta!"; o usado el .innerHTML. Este sirve para lo mismo pero se puede añadir una etiqueta span meter estilos como color, size,...
        document.querySelector("#message").innerHTML = "La suma es correcta!";

        console.log("mensaje" + message);

    } else {
        //document.querySelector("#message").textContent = "La suma es incorrecta!";
        document.querySelector("#message").innerHTML = "La suma es incorrecta!";
    }

    console.log("esto es un if mas un sumgess " + sumGuess);

});













