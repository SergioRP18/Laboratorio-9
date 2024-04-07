let messageChat1 = "chat1"
let messageChat2 = "Chat2"


Init();

function Init(){
    const botonBlue = document.getElementById("enviar-blue");
    const botonRed = document.getElementById("enviar-red");

    botonBlue.addEventListener("click",onBotonBlueClick);
    botonRed.addEventListener("click",onBotonRedClick);
}

function onBotonBlueClick(){
    const inputBlue = document.getElementById("input-blue");
    const message = inputBlue.value;
    if(message !== ""){
        crearBurbujaMensaje(message, "blue");
        inputBlue.value = "";
    }
}

function crearBurbujaMensaje(mensaje,color){
    const container = document.getElementById("container");
    const messageDiv = document.createElement("div");
    if(color === "blue"){
        messageDiv.setAttribute("class","message-blue ");
    } else if(color === "red"){
        messageDiv.setAttribute("class","message-red");
    }
    const messageP = document.createElement("p");
    messageP.innerText = mensaje;

    messageDiv.appendChild(messageP);
    container.appendChild(messageDiv);

    container.scrollTo(0, container.scrollHeight);
}

function onBotonRedClick(){
    const inputRed = document.getElementById("input-red");
    const message = inputRed.value;
    if(message !== ""){
        crearBurbujaMensaje(message, "red");
        inputBlue.value = "";
    }
}


