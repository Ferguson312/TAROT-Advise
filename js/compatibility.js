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
    var questionInput2 = document.querySelector('.compatibility2_question').value.trim();

    var randomNumber = Math.floor(Math.random() * 2) + 1;

    var cardImg = document.querySelector('.compatibility_img');
    var cardDesc = document.querySelector('.compatibility__info-desc');
    var sum = 0;
    var sum2 = 0;

    var ind1 = ['а', 'и', 'с', 'ъ'];
    var ind2 = ['б', 'й', 'т', 'ы'];
    var ind3 = ['в', 'к', 'у', 'ь'];
    var ind4 = ['г', 'л', 'ф', 'э'];
    var ind5 = ['д', 'м', 'х', 'ю'];
    var ind6 = ['е', 'н', 'ц', 'я'];
    var ind7 = ['ё', 'о', 'ч'];
    var ind8 = ['ж', 'п', 'ш'];
    var ind9 = ['з', 'р', 'щ'];

    for (let i = 0; i < questionInput.length; i++) {

        // Приводим букву к нижнему регистру
        const letter = questionInput[i].toLowerCase();

        if (ind1.includes(letter))
          {
            sum += 1;
          }
        else if (ind2.includes(letter))
          {
            sum += 2;
          }
        else if (ind3.includes(letter))
          {
            sum += 3;
          }
        else if (ind4.includes(letter))
          {
            sum += 4;
          }
        else if (ind5.includes(letter))
          {
            sum += 5;
          }
        else if (ind6.includes(letter))
          {
            sum += 6;
          }
        else if (ind7.includes(letter))
          {
             sum += 7;
          }
        else if (ind8.includes(letter))
          {
            sum += 8;
          }
        else if (ind9.includes(letter))
          {
            sum += 9;
          }
        else sum += 0;
    }

    for (let i = 0; i < questionInput2.length; i++) {

      // Приводим букву к нижнему регистру
      const letter = questionInput2[i].toLowerCase();

      if (ind1.includes(letter))
        {
          sum2 += 1;
        }
      else if (ind2.includes(letter))
        {
          sum2 += 2;
        }
      else if (ind3.includes(letter))
        {
          sum2 += 3;
        }
      else if (ind4.includes(letter))
        {
          sum2 += 4;
        }
      else if (ind5.includes(letter))
        {
          sum2 += 5;
        }
      else if (ind6.includes(letter))
        {
          sum2 += 6;
        }
      else if (ind7.includes(letter))
        {
           sum2 += 7;
        }
      else if (ind8.includes(letter))
        {
          sum2 += 8;
        }
      else if (ind9.includes(letter))
        {
          sum2 += 9;
        }
      else sum2 += 0;
  }

  var index = sum + sum2;

  if (index > 22) index -= 22;

    switch (index) {
        case 1:
            cardImg.src = "/img/01.png";
            break;
        case 2:
            cardImg.src = '/img2/NO.PNG';
            break;
    }
    cardDesc.textContent = sum + " " + sum2 + " " + index;
}

document.querySelector('.compatibility__btn').addEventListener('click', showcompatibility);
