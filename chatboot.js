document.getElementById('send-btn').addEventListener('click',sendMessage);
document.getElementById('user-input').addEventListener('keypress',function(e){
    if(e.key ==='Enter'){
        sendMessage();
    }
});
function sendMessage(){
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value;
    if(userInput.trim() !== ''){
        displayMessage(userInput,'user');
        inputField.value = '';
        getBotResponse(userInput);
    }
}
function displayMessage(message,sender){
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message',sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function getBotResponse(userInput){
    let botResponse = '';
    if(userInput.toLowerCase().includes('hola')){
        botResponse = '!Hola! ¿En que te puedo ayudar?';
    }
    else if(userInput.toLowerCase().includes('Ayuda')){
        botResponse = 'Necesitas ayuda en programacion? elige el lenguaje: ';
    }
    else if(userInput.toLowerCase().includes('Javascript')){
        botResponse = 'Javascript es un lenguaje para desarrollo web enfocado en el FrontEnd: ';
    }
    else if(userInput.toLowerCase().includes('C++')){
        botResponse = 'C++ es un lenguaje orientado a objetos, excelente para aprender a programar: ';
    }
    else if(userInput.toLowerCase().includes('Python')){
        botResponse = 'Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código: ';
    }
    else if(userInput.toLowerCase().includes('Html')){
        botResponse = 'Htmles la sigla del inglés HyperText Markup Language (lenguaje de marcado de hipertexto) y refiere al lenguaje de marcado para la elaboración de páginas web.: ';
    }
    else if(userInput.toLowerCase().includes('SQL')){
        botResponse = 'SQL, sigla del inglés Structured Query Language (lenguaje de consulta estructurada), es un lenguaje que permite a los programadores consultar y manipular bases de datos: ';
    }
    else if(userInput.toLowerCase().includes('SJava')){
        botResponse = 'Java es el quinto lenguaje de programación más utilizado y demandado en la actualidad es Java (35,35 %), otro de los lenguajes de uso general y uno de los más antiguos en esta lista.';
    }
    else if(userInput.toLowerCase().includes('adios')){
        botResponse = 'Adios que tengas un lindo dia: ';
    }
    else{
        botResponse = 'Lo siento no entiendo tu pregunta.';
    }
    setTimeout(()=>{
        displayMessage(botResponse,'bot');
    }, 1000);

}