let cardInput = document.getElementById('cardNumberInput')
let answerButton = document.getElementById('answerButton')

cardInput.addEventListener('keyup', validateCard)

function validateCard() {
    let numberCard = cardInput.value.replace(/\s+/g, '');
    let sum = 0;
    let temp;

    for (let i = 0; i < numberCard.length; i++) {
        if (i % 2 !== 0) {
            temp = 2 * Number(numberCard[i])
            if (temp > 9)
                sum += temp - 9;
            else
                sum += temp
        } else {
            sum += Number(numberCard[i])
        }
    }
    if ((numberCard.startsWith('34') || numberCard.startsWith('37')) && (numberCard.length === 15)){
        answerButton.innerText = 'American Express'
        answerButton.className = 'btn btn-success mt-2 w-100 fs-4'
        cardInput.className = 'form-control text-light bg-dark btn-outline-success'
    } else if ((numberCard.startsWith('51') || numberCard.startsWith('52') ||
        numberCard.startsWith('53') || numberCard.startsWith('54') ||
        numberCard.startsWith('55')) && (numberCard.length === 16)) {
        answerButton.innerText = 'MasterCard'
        answerButton.className = 'btn btn-success mt-2 w-100 fs-4'
        cardInput.className = 'form-control text-light bg-dark btn-outline-success'
    } else if (numberCard.startsWith('4') && (numberCard.length === 13 || numberCard.length === 16)) {
        answerButton.innerText = 'Visa'
        answerButton.className = 'btn btn-success mt-2 w-100 fs-4'
        cardInput.className = 'form-control text-light bg-dark btn-outline-success'
    } else {
        answerButton.innerText = 'Invalid card number!';
        answerButton.className = 'btn btn-danger mt-2 w-100 fs-4'
        cardInput.className = 'form-control text-light bg-dark btn-outline-danger'
    }
}