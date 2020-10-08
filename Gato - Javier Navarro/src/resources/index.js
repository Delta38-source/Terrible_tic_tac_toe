//Variables
const btns = document.getElementsByClassName("btn");
var player = true;
var winner = false;
let key;
var symbs = btns.item(key) //Variable que almacena el atributo "value" de btns
// En lugar de [btns.item(key).value] ahora sólo es [symbs.value] para que sea más corto.

for (let i = 0; i < btns.length; i++){
    btns.item(i).value = i + 1
    console.log(btns.item(i).value)
}

function buttonClick(currentBtn, key){
    if (currentBtn.innerText != ""){
        console.log("Already a value there") // Con esto evitamos sobrescribir el valor de los botones
    }else if (player){
        currentBtn.innerText = "X"
        player = false
        console.log("Obtenido " + btns.item(key).innerText + " en la casilla: " + currentBtn.value)
        if (winner == false){
            // Filas Horizontales
            if (btns.item(0).innerText == btns.item(1).innerText && btns.item(1).innerText == btns.item(2).innerText && btns.item(0).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(3).innerText == btns.item(4).innerText && btns.item(4).innerText == btns.item(5).innerText && btns.item(3).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(6).innerText == btns.item(7).innerText && btns.item(7).innerText == btns.item(8).innerText && btns.item(6).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }
            // Filas verticales
            if (btns.item(0).innerText == btns.item(3).innerText && btns.item(3).innerText == btns.item(6).innerText && btns.item(0).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(1).innerText == btns.item(4).innerText && btns.item(4).innerText == btns.item(7).innerText && btns.item(1).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(2).innerText == btns.item(5).innerText && btns.item(5).innerText == btns.item(8).innerText && btns.item(2).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }
            // Filas diagonales
            if (btns.item(0).innerText == btns.item(4).innerText && btns.item(4).innerText == btns.item(8).innerText && btns.item(0).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(2).innerText == btns.item(4).innerText && btns.item(4).innerText == btns.item(6).innerText && btns.item(2).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }
        }
    }else{
        currentBtn.innerText = "O"
        player = true
        console.log("Obtenido " + btns.item(key).innerText + " en la casilla: " + currentBtn.value)
        if (winner == false){
            // Filas Horizontales
            if (btns.item(0).innerText == btns.item(1).innerText && btns.item(1).innerText == btns.item(2).innerText && btns.item(0).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(3).innerText == btns.item(4).innerText && btns.item(4).innerText == btns.item(5).innerText && btns.item(3).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(6).innerText == btns.item(7).innerText && btns.item(7).innerText == btns.item(8).innerText && btns.item(6).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }
            // Filas verticales
            if (btns.item(0).innerText == btns.item(3).innerText && btns.item(3).innerText == btns.item(6).innerText && btns.item(0).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(1).innerText == btns.item(4).innerText && btns.item(4).innerText == btns.item(7).innerText && btns.item(1).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(2).innerText == btns.item(5).innerText && btns.item(5).innerText == btns.item(8).innerText && btns.item(2).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }
            // Filas diagonales
            if (btns.item(0).innerText == btns.item(4).innerText && btns.item(4).innerText == btns.item(8).innerText && btns.item(0).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }else if (btns.item(2).innerText == btns.item(4).innerText && btns.item(4).innerText == btns.item(6).innerText && btns.item(2).innerText != ""){
                console.log("Winner")
                winner = true
                if (player){
                    alert("Victoria para el jugador 1!")
                }else{
                    alert("Victoria para el jugador 2!")
                }
            }
        }
    }
}

for (let key = 0; key < btns.length; key++) { // Listener para los clicks (robado de su clase xd)
    btns[key].addEventListener("click", function(event){
        buttonClick(btns[key], key)
    })
}