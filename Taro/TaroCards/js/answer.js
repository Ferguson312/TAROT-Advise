document.querySelector('.answer__btn').addEventListener('click', showRandomAnswer);

        function showRandomAnswer(event) {
            event.preventDefault();


            var randomNumber = Math.floor(Math.random() * 2) + 1;
            var cardImg = document.querySelector('.card2_img');
            var cardDesc = document.querySelector('.answer__info-desc');

            switch (randomNumber) {
                case 1:
                    cardImg.src = "/img2/YES.PNG";
                    cardDesc.textContent = 'Да';
                    break;
                case 2:
                    cardImg.src = '/img2/NO.PNG';
                    cardDesc.textContent = 'Нет';
                    break;




            }
        }