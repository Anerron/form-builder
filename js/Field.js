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
        const workspace = document.querySelector('.main__workspace'),
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
    }

    renderInput(type) {
        const input = document.createElement('input');

        if (type.cssContext === 'Текст') {
            input.type = 'text';
        } else if (type.cssContext === 'Почта') {
            input.type = 'email';
        } else if (type.cssContext === 'Телефон') {
            input.type = 'tel';
        } else if (type.cssContext === 'Число') {
            input.type = 'number';
        } else if (type.cssContext === 'Пароль') {
            input.type = 'password';
        }
    }
}