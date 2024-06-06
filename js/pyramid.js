document.querySelector('.answer__btn').addEventListener('click', showRandomCard);

        function showRandomCard(event) {
            event.preventDefault();

            var randomNumber = Math.floor(Math.random() * 2) + 1;
            var cardImg = document.querySelector('.card3_img');
           
            switch (randomNumber) 
            {
                case 1:
                    cardImg.src = "/img2/02.jpg";
                    break;
               
                case 2:
                    cardImg.src = "/img2/02.jpg";
                    break;
            
            
            }
        }