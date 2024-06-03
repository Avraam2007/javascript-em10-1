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

const data = {
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

export function setData(firstName, lastName, e_mail, phoneNumber, description, passWord) {
    data.first_name = firstName;
    data.last_name = lastName;
    data.email = e_mail;
    data.phone_number = phoneNumber;
    data.desc = description;
    data.password = passWord;
}