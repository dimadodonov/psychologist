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
                $('.psychologist-selection__quote').insertBefore(
                    '.psychologist-selection__btn'
                );
                $('.section-intro__numbers').insertAfter('.section-intro__btn');
                $('.section-intro blockquote').insertAfter(
                    '.section-intro__btn'
                );
            } else {
                $('.psychologist-selection__quote').insertAfter(
                    '.psychologist-selection h2'
                );

                $('.section-intro__numbers').insertAfter(
                    '.section-intro-info h1'
                );
                $('.section-intro blockquote').insertAfter(
                    '.section-intro-info h1'
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

    document.querySelectorAll('a[href^="#"').forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = document.querySelector('.header').offsetHeight;
            // const topOffset = '100px'; // если не нужен отступ сверху
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth',
            });
        });
    });

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

    // Находим все элементы с классом reviews-item__btn
    var reviewsItemBtns = document.querySelectorAll('.reviews-item__btn');

    // Перебираем найденные элементы и добавляем обработчик события клика
    reviewsItemBtns.forEach(function (reviewsItemBtn) {
        reviewsItemBtn.addEventListener('click', function () {
            // Находим родительский элемент (div с классом reviews-item) кнопки
            var parent = this.closest('.reviews-item');

            // Находим элемент с классом reviews-item__desc внутри родительского блока
            var desc = parent.querySelector('.reviews-item__desc');

            // Проверяем текущий текст кнопки
            if (this.textContent.trim() === 'Подробнее') {
                // Если текст 'Подробнее', устанавливаем высоту в 'auto' и меняем текст на 'Свернуть'
                desc.style.height = 'auto';
                parent.classList.add('show');
                this.textContent = 'Свернуть';
            } else {
                // Если текст 'Свернуть', устанавливаем высоту в 0 и меняем текст на 'Подробнее'
                desc.style.height = '240px';
                parent.classList.remove('show');
                this.textContent = 'Подробнее';
            }
        });
    });
};
