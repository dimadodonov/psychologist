import { Collapse } from 'bootstrap';

export default () => {
    const collapseTriggers = document.querySelectorAll(
        '.faq__collapse-item-header'
    );

    collapseTriggers.forEach((collapseTrigger) => {
        const targetId = collapseTrigger.getAttribute('data-bs-target');
        const targetContent = document.querySelector(targetId);

        const myCollapse = new Collapse(targetContent, {
            toggle: false,
        });

        collapseTrigger.addEventListener('hidden.bs.collapse', () => {
            // Удалить класс при закрытии
            collapseTrigger.classList.remove('your-open-class');
        });

        collapseTrigger.addEventListener('shown.bs.collapse', () => {
            // Добавить класс при открытии
            collapseTrigger.classList.add('your-open-class');
        });

        collapseTrigger.addEventListener('click', () => {
            myCollapse.toggle();
        });
    });
};
