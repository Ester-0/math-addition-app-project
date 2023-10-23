// Buena suerte!

// 1. Genera dos números aleatórios y guárdalos en dos variables
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

document.querySelector("#primary-number").value = num1;
document.querySelector("#secondary-number").value = num2;

// 2. Haz la suma de dichos números y guardala en otra variable
const sum = num1 + num2;
console.log("esto suma " + sum);

// 3. Cuando el usuario haga clic en el botón, debes comprobar si la suma que has calculado es igual al valor que ha introducido el usuario.
const button = document.querySelector("#btn");

button.addEventListener("click", function () {
    const sumGuess = +document.querySelector("#guess").value;
    let message = document.querySelector("#message").innerHTML;

    if (sum == sumGuess) {
        //message = "La suma es correcta!";

        document.querySelector("#message").innerHTML = message.replace("La suma es correcta! CAmbia este mensaje en función de si la suma es correcta o incorrecta cuando el usuario haga click en el botón", "La suma es correcta!")
        
        console.log ("mensaje" + message)

    } else { //message = "La suma es incorrecta!";
        document.querySelector("#message").innerHTML = message.replace("La suma es correcta! CAmbia este mensaje en función de si la suma es correcta o incorrecta cuando el usuario haga click en el botón","La suma es incorrecta!")
    }

    console.log("esto es un if mas un sumgess " + sumGuess);

});













