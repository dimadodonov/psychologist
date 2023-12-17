import $ from 'jquery';

export default () => {
    (function ($) {
        // Проверяем ширину экрана при загрузке страницы
        checkScreenWidth();

        // Проверяем ширину экрана при изменении размера окна
        $(window).on('resize', function () {
            checkScreenWidth();
        });

        function checkScreenWidth() {
            // Получаем текущую ширину экрана
            var screenWidth = $(window).width();

            // Проверяем условие: если ширина экрана 720px и меньше
            if (screenWidth <= 1024) {
                // Перемещаем .section-intro__numbers перед .section-intro__btn
                // $('.psychologist-selection__desc h2').insertAfter(
                //     '.psychologist-selection__wrap'
                // );
                $('.section-intro__numbers').insertAfter('.section-intro__btn');
                $('.section-intro blockquote').insertAfter(
                    '.section-intro__btn'
                );
            }
            if (screenWidth <= 720) {
                // Перемещаем .section-intro__numbers перед .section-intro__btn
                $('.section-intro__numbers').insertAfter(
                    '.section-intro .container'
                );
            }
        }
    })($.noConflict());

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
