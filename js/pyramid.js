document.querySelector('.pyramid__btn').addEventListener('click', showRandomTarotCard);

        function showRandomTarotCard(event) {
            event.preventDefault();


            var randomNumber = Math.floor(Math.random() * 1) + 1;
            var cardImg = document.querySelector('.card3_img');
            var cardImg2 = document.querySelector('.card4_img');
            var cardImg3 = document.querySelector('.card5_img');
            var cardImg4 = document.querySelector('.card6_img');
            var cardDesc = document.querySelector('.pyramid__info-desc');

            var myPix = new Array("img2/02.jpg","img2/03.jpg","img2/04.jpg","img2/05.jpg","img2/06.jpg","img2/07.jpg","img2/08.jpg","img2/09.jpg");
            var randomNum = Math.floor(Math.random() * myPix.length);
            cardImg.src = myPix[randomNum];
            var randomNum = Math.floor(Math.random() * myPix.length);
            cardImg2.src = myPix[randomNum];
            var randomNum = Math.floor(Math.random() * myPix.length);
            cardImg3.src = myPix[randomNum];
            var randomNum = Math.floor(Math.random() * myPix.length);
            cardImg4.src = myPix[randomNum];
        




        }