document.querySelector('.dayCard__btn').addEventListener('click', showRandomTarotCard);

        function showRandomTarotCard(event) {
            event.preventDefault();

            var randomNumber = Math.floor(Math.random() * 5) + 1;
            var cardImg = document.querySelector('.card_img');
            var cardDesc = document.querySelector('.dayCard__info-desc');

            switch (randomNumber) {
                case 1:
                    cardImg.src = "/img/card1.PNG";
                    cardDesc.textContent = 'Башня говорит о том, что в вашей жизни произошли или скоро будут очень сильные перемены. Скорее всего, эти самые перемены будут неожиданными, не всегда желанными. Может произойти либо взлёт, либо падение. Человек может с кем-нибудь поссориться, кого-то сильно возненавидеть, впасть в агрессию, оборвать связи, впутаться в какой-нибудь криминал. Жизнь очень круто поменяется, произойдет встряска. Чаще всего люди, которые переживают такой период разрушения, начинают задавать вопрос - за что им всё это, и ждут ответа, однако не дождутся, потому что вопрос в корне неверный. Надо спрашивать - для чего было дано это потрясение. На карте изображено разрушение, молнии бьют со всех сторон. Вмешаются высшие силы, к вам придет озарение.';
                    break;
                case 2:
                    cardImg.src = '/img/card2.PNG';
                    cardDesc.textContent = 'положительная карта, которая обладает насыщенной энергией, и она апеллирует человека к столь же активным, инициативным и создающим действиям. Маг убеждает, что у человека есть право и возможность распоряжаться кем-либо, подчинять своей воле. И эта способность ему дана в настоящий момент, он уже может руководить, вести дела, контролировать свое окружение и сконцентрироваться на происходящем. Когда власть в твоих руках, можно перейти на качественный уровень бытия, утереть нос самому себе, овладеть новыми сферами жизни, добиться высоких результатов в разных областях.';
                    break;
                case 3:
                    cardImg.src = '/img/card3.PNG';
                    cardDesc.textContent = 'Аркан является воплощением удачи и удовлетворенности. Человек под воздействием Мира, будет испытывать чувство радости и гармонии. Он с удовольствием будет не только отдыхать, но и выполнять работу. Карта Мир уже говорит за себя о том, что человек должен примириться с окружающим миром. Аркан наполнен положительной энергией, человек как будто обретает личный рай, достигает долгожданной и вожделенной цели. Кроме того, Мир может свидетельствовать о том, что завершился определенный жизненный цикл или что-то реализовалось.С Картой Мир человек ощутит полную победу даже в самых трудных и рискованных ситуациях.';
                    break;
                case 4:
                    cardImg.src = '/img/card4.PNG';
                    cardDesc.textContent = 'Обычно эта карта выпадает интровертам, не склонным поддаваться влиянию внешних обстоятельств, чувствующим себя уютнее в состоянии замкнутости. Отшельник символизирует единство земного и небесного, поиск жизненного пути и цели. Во многих случаях он может намекать на успех таких поисков, на тот факт, что человек найдет на этом пути учителя и наставника. Также появление Отшельника может свидетельствовать о том, что человек имеет твердую идейную позицию в жизни, выверенную систему ценностей и умеет держать слово как перед другими людьми, так и перед самим собой. Карта может указывать на наличие в характере таких черт, как осмотрительность и осторожность, умение взвешивать свои решения.';
                    break;
                case 5:
                    cardImg.src = '/img/card5.PNG';
                    cardDesc.textContent = 'Аркан свидетельствует о чем-то потаенном и бессознательном, когда речь идет о темных сторонах человека, о его тайнах. Карта может скрывать такую тайну, которая может вылиться опасностью. В жизни человека могут произойти неприятные моменты с проявлением эмоций (зависть, ревность). И пока не время испытывать себя на прочность, проявлять свою смелость. Карта предостерегает человека от опасности, она советует ему – вести себя осторожно, отслеживая каждый свой шаг. А все потому что многие события, которые будут происходить не всегда будут подвластны человеку. Человек столкнется с непредсказуемостью. Информацию, которую он будет получать, окажется неполной.';
                    break;
                case 6:
                    cardImg.src = '/img/card6.PNG';
                    cardDesc.textContent = 'Звезда показывает надежду, происходящие изменения к лучшему. Аркан символизирует восход солнца, но рассвет только-только наступает. Это означает, что у человека возникнут какие-либо новые идеи, которые он сумеет воплотить в жизнь. Он уверен, что вскоре наступит лучшее будущее, он мечтает, строит планы. Может быть появится новый знакомый или новая любовь, имеющиеся разногласия будут преодолены, настанет взаимопонимание, таланты разовьются, на человека снизойдет озарение. Аркан говорит о том, что наступила эпоха безмятежности, трудности остались позади, перспективы будут весьма многообещающими. Вам нужно подождать, но бездействие не должно быть напрасным. Ваше желание исполнится. ';
                    break;
                case 7:
                    cardImg.src = '/img/card7.PNG';
                    cardDesc.textContent = 'Аркан имеет дурное значение и указывает на то, что человек не способен держать ситуацию под контролем, и из-за этого навлекает на себя много неприятностей. Карта Дьявол говорит о том, что человек оступился, и его поступки привели к саморазрушению и деградации. Карта предупреждает о том, что не следует потакать своим слабостям и идти у них на поводу. Даже плотскую силу можно назвать потаканием своим слабостям. Человек под воздействием этой карты будет кому-то подчиняться или от кого-нибудь зависеть. Только ни к чему хорошему это не приведет. Появится в окружении какая-то личность, которая будет иметь над ним власть, лишая его свободы и полноценной жизни.';
                    break;
                case 8:
                    cardImg.src = '/img/card8.PNG';
                    cardDesc.textContent = 'Карта сообщает о том, что совсем скоро появится информация, благодаря которой человек посмотрит на свою жизнь другими глазами. Карта Верховная жрица показывает спокойствие, когда человек уходит в себя. Ему хочется побыть в спокойной обстановке, но не для того, чтобы разобраться со своими делами, а для того, чтобы просто побыть некоторое время в тишине. Решение вопросов, разумеется, придет само собой, но попозже. Человек, которому выпадает эта карта, как правило, развивает свои таланты и индивидуальное познание. Желаемого добивается через духовную мудрость и терпение. Бывает весьма настойчивым и сообразительным. Здравый смысл – это про Верховную жрицу.';
                    break; 
                case 9:
                    cardImg.src = '/img/card9.PNG';
                    cardDesc.textContent = 'В прямом положении эта карта указывает на бесперспективное, тупиковое положение. При этом вовсе не означает, что из ситуации вовсе нет выхода – просто это нельзя (или очень сложно) сделать привычным способом. Нужно менять восприятие действительности и образ действий, только тогда можно выпутаться из сложившегося положения. Также Повешенный может говорить о том, что человек подвергается сильному давлению, его вынуждают поступать определенным образом либо просто используют. Иногда Повешенный может указывать на то, что человек оказался в изоляции.';
                    break;
                case 10:
                    cardImg.src = '/img/card10.PNG';
                    cardDesc.textContent = 'Карта свидетельствует о том, что в жизни что-то пришло к логическому завершению (умерло, отжило). Но не стоит отчаиваться, ведь после завершения одного дела, обязательно последует начало новых дел, рождение новых идей и проектов. Это может быть связано как с личными отношениями, так и с работой. Также карта может свидетельствовать о том, что человеку придется расстаться или навсегда распрощаться со своими делами, возможно, он сам от чего-то откажется.';
                    break;
            }
        }