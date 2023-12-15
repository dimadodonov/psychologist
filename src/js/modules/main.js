export default () => {
    document.querySelector('.header-menu').addEventListener('click', (e) => {
        const hamburger = document.querySelector('.header-menu .hamburger');
        hamburger.classList.toggle('animate');
    });

    // Находим все кнопки
    const buttons = document.querySelectorAll('.button-type');

    // Находим все блоки psychotype-sheme
    const psychotypeShemes = document.querySelectorAll('.psychotype-sheme');

    // Добавляем обработчик события для каждой кнопки
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Получаем значение data-type
            const target = button.getAttribute('data-type');

            // Перебираем блоки psychotype-sheme
            psychotypeShemes.forEach(function (sheme) {
                // Проверяем, соответствует ли data-type значению data-type
                if (sheme.getAttribute('id') === target) {
                    // Тогда показываем блок, убирая класс hidden
                    sheme.classList.remove('hidden');
                } else {
                    // Иначе скрываем блок, добавляя класс hidden
                    sheme.classList.add('hidden');
                }
            });
            // Убираем класс активной кнопки со всех кнопок
            buttons.forEach(function (btn) {
                btn.classList.remove('button-type__accent');
            });

            // Добавляем класс active только к нажатой кнопке
            button.classList.add('button-type__accent');
        });
    });
};
