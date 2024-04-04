let random = "";
i = 0
document.addEventListener('DOMContentLoaded', function() {
    random = getRandomNumber(1, 20);
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function test() {
    i += 1;
    txt = document.getElementById('count').innerHTML=i;
    const userInput = parseInt(document.getElementById('choice').value);

    const resultMessage = document.createElement('li');
    let messageText;
    if (userInput > 20){
        alert('Your number is more than 20')
    } else if (userInput === random) {
        messageText = 'Correct number';
        setInterval(function(){location.reload();}, 1000)
    } else if (userInput < random) {
        messageText = 'Your number is smaller';
    } else {
        messageText = 'Your number is bigger';
    }
    console.log(random);
    resultMessage.textContent = messageText;
    document.getElementById('ul').appendChild(resultMessage);
}
