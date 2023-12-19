export default () => {
    const openModal = (triggerSelector, modalDataSelector) => {
        const triggers = document.querySelectorAll(triggerSelector); // Выбираем все кнопки по селектору
        const modal = document.querySelector(modalDataSelector);
        if (!modal) return;

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('modal_active');
            });
        });
    };
    openModal('.js-popup-order', '.modal[data-modal="order"]'); // Запускаем функцию и передаем селекторы для первого модального окна
    openModal('.js-popup-quiz', '.modal[data-modal="quiz"]'); // Запускаем функцию и передаем селекторы для первого модального окна

    const closeModal = () => {
        // объявляем функцию закрытия модального окна
        const modals = document.querySelectorAll('.modal'); // ищем все модальные окна
        if (!modals) return; // если их нет, то прекращаем выполнение функции
        modals.forEach((el) => {
            // если есть, то для каждого из них
            el.addEventListener('click', (e) => {
                // при клике
                if (e.target.closest('.modal__close')) {
                    // если клик был клик на кнопке закрытия
                    el.classList.remove('modal_active'); // то скрываем модальное окно, удаляя активный класс
                }
                if (!e.target.closest('.modal__body')) {
                    // если клик был за пределами контентной части модального окна, то есть на затемненную область
                    el.classList.remove('modal_active'); // то тоже скрываем модальное окно, удаляя активный класс
                }
            });
        });
    };
    closeModal(); // вызываем функцию закрытия

    const quizItems = document.querySelectorAll('.modal-quiz__item');
    const progressBar = document.querySelector('.progress');
    const titleElement = document.querySelector('.modal__title');
    const backButton = document.querySelector('.modal__nav--prev');
    const modalInner = document.querySelector('.modal__inner');

    let currentStep = 1;

    function updateProgressBar() {
        const progressPercentage =
            ((currentStep - 1) / (quizItems.length - 1)) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function updateTitle() {
        const currentTitle =
            quizItems[currentStep - 1].getAttribute('data-title');
        titleElement.textContent = currentTitle;
    }

    function showStep(step) {
        quizItems.forEach((item) => (item.style.display = 'none'));
        quizItems[step - 1].style.display = 'block';
        updateProgressBar();
        updateTitle();
        // Проверяем, является ли текущий шаг последним, и скрываем кнопку "Назад" при необходимости
        if (step === quizItems.length) {
            backButton.style.display = 'none';
            modalInner.classList.add('thanks');
        } else {
            backButton.style.display = 'block';
            modalInner.classList.remove('thanks');
        }
    }

    function nextStep() {
        if (currentStep < quizItems.length) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function prevStep() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    }

    if (backButton) {
        // Назначаем обработчики событий для кнопок "Далее" и "Назад"
        document.querySelectorAll('.modal-quiz-next').forEach((button) => {
            button.addEventListener('click', nextStep);
        });

        document
            .querySelector('.modal__nav--prev')
            .addEventListener('click', prevStep);

        // Показываем первый шаг при загрузке страницы
        showStep(currentStep);
    }
};
