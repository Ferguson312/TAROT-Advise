document.getElementById('birthdate-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Получаем дату рождения из ввода
    const birthdate = document.getElementById('birthdate').value;
    
    if (!birthdate) {
        alert('Пожалуйста, введите дату рождения');
        return;
    }
    
    // Извлекаем цифры даты рождения
    const birthdateDigits = birthdate.replace(/-/g, '');
    
    // Суммируем цифры даты рождения
    let sum = 0;
    for (let char of birthdateDigits) {
        sum += parseInt(char);
    }
    
    // Приводим сумму к двузначному числу
    while (sum > 99) {
        sum = Math.floor(sum / 10) + (sum % 10);
    }
    
    // Отображаем результат
    displayCard(sum);
});

function displayCard(cardNumber) {
    const cards = [
        'Описание карты 1',
        'Описание карты 2',
        // Добавьте описания для всех карт до 99
    ];

    const cardResult = document.getElementById('card-result');
    cardResult.innerHTML = `Ваша карта: ${cards[cardNumber - 1] || 'Карта не найдена'}`;
}
