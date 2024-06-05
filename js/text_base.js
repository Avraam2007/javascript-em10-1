import { loadAccount } from "./data.js";

let formText = `
<h2 class="title">Sign in form</h2>
<form class="forms" id="form">
    <label for="first-name-type">
        <p class="labels">First name</p>
        <input type="text" name="first-name" class="inputs" id="first-name-type" placeholder="Enter first name" minlength="2" required />
    </label>
    <label for="last-name-type">
        <p class="labels">Last name</p>
        <input type="text" name="last-name" class="inputs" id="last-name-type" placeholder="Enter last name" minlength="2" required />
    </label>
    <label for="email-type">
        <p class="labels">E-mail</p>
        <input type="email" name="email" class="inputs" id="email-type" placeholder="Enter email" pattern="^\\S+@\\S+\\.\\S+$" required />
    </label>
    <label for="phone-number-type">
        <p class="labels">Phone number</p>
        <input type="tel" name="phone-number" class="inputs" id="phone-number-type" placeholder="Enter phone number" required />
    </label>
    <label for="description-type">
        <p class="labels">Description</p>
        <textarea name="description" class="textarea" id="description-type" placeholder="Enter description" rows="5" cols="40" minlength="11" required></textarea>
    </label>
    <label for="password-type">
        <p class="labels">Password</p>
        <input type="password" name="password" class="inputs" id="password-type" placeholder="Enter password" maxlength="16" minlength="8" pattern="(?=.*[0-9])(?=.*[@#$%^&*-_+=~:;,.?!<>])(?=.*[a-z])(?=.*[A-Z]).{8,16}" required />
    </label>
    <input type="submit" value="Submit" class="submit" id="submit">
</form>`;

export function setFormText(text) {
    formText = text;
}

export function getFormText() {
    return formText;
}

const defaultData = {
    id: 1,
    first_name: "Test",
    last_name: "Teston",
    email: "example@google.com",
    phone_number: "+380010000000",
    desc: "Some description",
    password: "123DDDooo---"
};

const bigData =  await loadAccount();
if ((getBigData().find((item)=>item.email == defaultData.email) == undefined) && (getBigData().find((item)=>item.phone_number == defaultData.phone_number) == undefined))
    bigData.push(structuredClone(defaultData));

const data = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    desc: '',
    password: ''
}

export function getData() {
    return data;
}

export function getBigData() {
    return bigData;
}

export function getDataId(index) {
    return bigData[index].id;
}

export function getDataEmail(index) {
    return bigData[index].email;
}

export function getDataPhone(index) {
    return bigData[index].phone_number;
}

export function getBigDataElement(index) {
    return (index > bigData.length-1 || index < 0) ? null : bigData[index];
}

export function setData(firstName, lastName, e_mail, phoneNumber, description, passWord, id1) {
    data.first_name = firstName;
    data.last_name = lastName;
    data.email = e_mail;
    data.phone_number = phoneNumber;
    data.desc = description;
    data.password = passWord;
    data.id = id1;
}

export function appendData(data){
    bigData.push(structuredClone(data));
}

let formText1 = `
<h2>Log in</h2>
<form class="forms" id="form-1">
    <label for="email-type-1">
        <p class="labels">E-mail</p>
        <input type="email" name="email" class="inputs" id="email-type-1" placeholder="Enter email" pattern="^\\S+@\\S+\\.\\S+$" required />
    </label>
    <label for="password-type-1">
        <p class="labels">Password</p>
        <input type="password" name="password" class="inputs" id="password-type-1" placeholder="Enter password" maxlength="16" minlength="8" pattern="(?=.*[0-9])(?=.*[@#$%^&*-_+=~:;,.?!<>])(?=.*[a-z])(?=.*[A-Z]).{8,16}" required />
    </label>
    <label for="submit-2">
        <input type="submit" value="Submit" class="submit" id="submit-2">
    </label>
</form>`;

export function setFormText1(text) {
    formText1 = text;
}

export function getFormText1() {
    return formText1;
}