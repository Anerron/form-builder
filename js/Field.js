export class Field {
    #id;
    #type;
    #label;

    constructor(type, label) {
        this.#type = type;
        this.#label = label;
        this.#id = Date.now() + Math.random();
    }

    get id() {
        return this.#id;
    }

    get type() {
        return this.#type;
    }

    get label() {
        return this.#label;
    }

    set label(value) {
        this.#label = value;
    }

    renderField() {
        const workspace = document.querySelector('.main__workspace__wrapper'),
              field = document.createElement('div'),
              fieldType = document.createElement('div'),
              fieldLable = document.createElement('div'),
              fieldTrashbox = document.createElement('div'),
              fieldTrashboxImg = document.createElement('img');

        field.classList.add('field');
        fieldType.classList.add('field__type');
        fieldLable.classList.add('field__lable');
        fieldTrashbox.classList.add('trashbox');

        workspace.append(field);
        
        fieldType.textContent = `${this.type}`;
        field.append(fieldType);

        fieldLable.contentEditable = 'true';
        fieldLable.textContent = 'Введите ваши данные';
        field.append(fieldLable);

        fieldTrashboxImg.src = './imgs/icons8-trash.svg';
        fieldTrashbox.append(fieldTrashboxImg);
        field.append(fieldTrashbox);
    }

    renderInput() {
        const input = document.createElement('input');

        if (this.#type === 'Текст') {
            input.type = 'text';
            input.name = 'text';
            input.placeholder = 'Введите ваш текст';
        } else if (this.#type === 'Почта') {
            input.type = 'email';
            input.name = 'mail';
            input.placeholder = 'Введите вашу почту';
        } else if (this.#type === 'Телефон') {
            input.type = 'tel';
            input.name = 'telephone';
            input.placeholder = 'Введите ваш номер телефона';
        } else if (this.#type === 'Число') {
            input.type = 'number';
            input.name = 'numer';
            input.placeholder = 'Введите ваше число';
        } else if (this.#type === 'Пароль') {
            input.type = 'password';
            input.name = 'password';
            input.placeholder = 'Введите ваш пароль';
        }
    }
}