function validateQuestion() {
    var questionInput = document.querySelector('.answer_question').value.trim();
    if (questionInput === "") {
        alert("Пожалуйста, введите ваш вопрос.");
        return false;
    }
    return true;
}

function showRandomAnswer(event) {
    event.preventDefault();

    // Проверяем введенный вопрос
    if (!validateQuestion()) {
        return;
    }

    var randomNumber = Math.floor(Math.random() * 2) + 1;
    var cardImg = document.querySelector('.card2_img');
    var cardDesc = document.querySelector('.answer__info-desc');

    switch (randomNumber) {
        case 1:
            cardImg.src = "/img2/YES.PNG";
            break;
        case 2:
            cardImg.src = '/img2/NO.PNG';
            break;
    }
}

document.querySelector('.answer__btn').addEventListener('click', showRandomAnswer);
