//function validateQuestion() {
 //   var questionInput = document.querySelector('.compatibility_question').value.trim();
  //  if (questionInput === "") {
    //    alert("Пожалуйста, введите ваш вопрос.");
      //  return false;
    //}
    //return true;
//}

function showcompatibility(event) {
    event.preventDefault();

    // Проверяем введенный вопрос
  //  if (!validateQuestion()) {
    //    return;
    //}
    var questionInput = document.querySelector('.compatibility_question').value.trim();
    var randomNumber = Math.floor(Math.random() * 2) + 1;
    var cardImg = document.querySelector('.compatibility_img');
    var cardDesc = document.querySelector('.compatibility__info-desc');

    var letterCounts = {};

    for (let i = 0; i < questionInput.length; i++) {
        // Приводим букву к нижнему регистру
        const letter = questionInput[i].toLowerCase();
    
        // Если буква уже есть в объекте, увеличиваем ее счетчик
        if (letterCounts[letter]) {
          letterCounts[letter]++;
        } else {  // иначе устанавливаем начальное значение счетчика равное 1
          letterCounts[letter] = 1;
        }
      }

    switch (randomNumber) {
        case 1:
            cardImg.src = "/img2/YES.PNG";
            break;
        case 2:
            cardImg.src = '/img2/NO.PNG';
            break;
    }
    cardDesc.textContent = letterCounts;
}

document.querySelector('.compatibility__btn').addEventListener('click', showcompatibility);
