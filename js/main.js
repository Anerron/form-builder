import { Field } from './Field.js';
import { FormBuilder } from './FormBuilder.js';

// Выпадающий список "Добавить поле", закрытие его

const buttonAdd = document.querySelector('.main__button_add'),
      buttonAddList = document.querySelector('.main__button_add__list'),
      buttonAddListClose = document.querySelector('.main__button_add__list__close');

buttonAdd.addEventListener('click', () => {
    buttonAddList.classList.remove('hidden');
});

buttonAddListClose.addEventListener('click', () => {
    buttonAddList.classList.add('hidden');
})

// Добавление полей в Рабочую область

const addListButtons = document.querySelectorAll('.button_li');

buttonAddList.addEventListener('click', (event) => {
    addListButtons.forEach((button) => {
        if (event.target === button) {
            const field = new Field(button.innerHTML, 'Введите ваши данные');
            field.renderField();
        }
    })
})

// Удаление полей из Рабочей области

const workspaceWrapper = document.querySelector('.main__workspace__wrapper');

workspaceWrapper.addEventListener('click', (event) => {
    const deleteBtn = event.target.closest('.trashbox');

    if (deleteBtn) {
        deleteBtn.parentElement.remove();
    }
})