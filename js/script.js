import { getData, getFormText, setData } from "./text_base.js";

function checkPhoneNumber(number) {
    const numPattern = /^[\+]?[(]?[3][8][)]?[-\s\.\(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/.test(number);
    return numPattern;
}

function checkVoid(value, minlength) {
    return value.trim().length >= minlength ? true : false;
}

function getValue(id) {
    return document.getElementById(id).value;
}

function checkForm() {
    // console.log(checkPhoneNumber(getValue('phone-number-type')));
    if(!(checkVoid(getValue('first-name-type'), 2) && checkVoid(getValue('last-name-type'), 2) && checkVoid(getValue('description-type'), 11))) {
        alert('Error: empty value');
    }
    else if(!(checkPhoneNumber(document.getElementById('phone-number-type').value))) {
        alert('Error: invaild type of phone number')
    }
    else {
        setData(getValue('first-name-type'), getValue('last-name-type'), getValue('email-type'), getValue('phone-number-type'), getValue('description-type'), getValue('password-type'));
        console.log(getData());
    }
}

function createBlock(type, blockClass, id, parentBlock) {
    const block = document.createElement(type);
    block.classList.add(blockClass);
    block.setAttribute("id", id);

    parentBlock.appendChild(block);
    return block;
}

const block = createBlock('main', 'content', 'content', document.body);
const form_block = createBlock('div', 'form-box', 'form-box', block);
form_block.innerHTML = getFormText();
document.getElementById('form').onsubmit = e => {
    e.preventDefault();
    checkForm();
    return false;
}