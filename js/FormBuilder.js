import { Field } from './Field.js';

export class FormBuilder {
    #fields = [];

    addField(type, label) {
        const field = new Field(type, label);
        this.#fields.push(field);
        
        return field;
    }

    removeField(id) {
        this.#fields = this.#fields.filter(f => f.id !== id);
    }

    get fields() {
        return this.#fields;
    }

    generateForm(container) {
        const form = document.createElement('form'),
              submit = document.createElement('button');

        container.innerHTML = '';

        this.#fields.forEach((field) => {
            const input = field.renderInput();
            form.append(input);
        });

        submit.classList.add('button');
        submit.textContent = 'Подтвердить данные';

        form.append(submit);
        container.append(form);
    }
}