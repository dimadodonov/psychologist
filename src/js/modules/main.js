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
                // $('.section-faq').insertAfter('.section-blog');
                $('.section-intro__numbers').insertAfter('.section-intro__btn');
                $('.section-intro blockquote').insertAfter(
                    '.section-intro__btn'
                );

                if ($('.blog-item').length > 0) {
                    $('.blog__sidebar').detach().appendTo('.blog-grid');
                    $('.blog-article.blog-choise-card')
                        .detach()
                        .appendTo('.blog-grid');
                }
                if ($('.blog-archive').length > 0) {
                    $('.blog-article.blog-choise-card')
                        .detach()
                        .appendTo('.blog-archive__row');
                }
                if ($('.page-wrap.psychologist-item').length > 0) {
                    $('.psychologist-item__conten--about')
                        .detach()
                        .appendTo('.psychologist-item__about');
                    $('.psychologist-item__price')
                        .detach()
                        .appendTo('.psychologist-item__about');
                }
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

                if ($('.blog-item').length > 0) {
                    $('.blog__sidebar').detach().appendTo('.blog__row');
                }
                if ($('.blog-archive').length > 0) {
                    $('.blog-choise-card').detach().appendTo('.blog-aside');
                }
                if ($('.page-wrap.psychologist-item').length > 0) {
                    $('.psychologist-item__price').insertAfter(
                        '.psychologist-item__content-teleport'
                    );
                    $('.psychologist-item__conten--about').insertAfter(
                        '.psychologist-item__content-teleport'
                    );
                }
            }
            if (screenWidth <= 768) {
                // Перемещаем .section-intro__numbers перед .section-intro__btn
                $('.section-intro__numbers').insertAfter(
                    '.section-intro .container'
                );

                if ($('.page-wrap.psychologist-item').length > 0) {
                    $('.psychologist-item__price').insertAfter(
                        '.psychologist-item__thumb'
                    );
                    $('.psychologist-item__name').insertBefore(
                        '.psychologist-item__thumb'
                    );
                }
            } else {
                if ($('.page-wrap.psychologist-item').length > 0) {
                    // $('.psychologist-item__price').insertAfter(
                    //     '.psychologist-item__thumb'
                    // );
                    $('.psychologist-item__name').insertBefore(
                        '.psychologist-item__content-tags'
                    );
                }
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

    const headerMenu = document.querySelector('.header-menu');
    if (headerMenu) {
        document
            .querySelector('.header-menu')
            .addEventListener('click', (e) => {
                const hamburger = document.querySelector(
                    '.header-menu .hamburger'
                );
                hamburger.classList.toggle('animate');
                document.querySelector('.header nav').classList.toggle('show');
            });
    }

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

    var textBlock = document.querySelector('.psychologist-item__text--about');
    var moreButton = document.querySelector('.psychologist-item__more span');

    if (moreButton) {
        moreButton.addEventListener('click', () => {
            if (textBlock.style.maxHeight) {
                // Свернуть текст
                textBlock.style.maxHeight = null;
                moreButton.textContent = 'Читать полностью';
            } else {
                // Развернуть текст
                textBlock.style.maxHeight = textBlock.scrollHeight + 'px';
                moreButton.textContent = 'Свернуть';
            }
        });
    }
};
