let formText1 = `
<h2>Track data</h2>
<form class="forms" id="form-1">
    <label for="track-name-type">
        <p class="labels">Track name</p>
        <input type="text" name="track-name" class="inputs" id="track-name-type" placeholder="Enter track name" required>
    </label>
    <label for="track-duration-type">
        <p class="labels">Track duration</p>
        <input type="text" name="track-duration" class="inputs" id="track-duration-type" placeholder="Enter track duration in seconds" required>
    </label>
    <label for="submit-2">
        <input type="submit" value="Submit" class="submit" id="submit-2">
    </label>
</form>`;

export function setFormText1(text) {
    formText1 = text;
}

export function getFormText1(text) {
    return formText1;
}

let formText2 = `
    <h2>Band data</h2>
    <form id="form-2">
        <label for="band-name-type">
            <p class="labels">Band name</p>
            <input type="text" name="Band name" id="band-name-type" placeholder="Enter band name" class="inputs" required>
        </label>
        <label for="soloist-type">
            <p class="labels">Soloist</p>
            <input type="text" name="Soloist" id="soloist-type" placeholder="Enter soloist name" class="inputs" required>
        </label>
        <label for="participants-type">
            <p class="labels">Participants</p>
            <input type="text" name="Participants" id="participants-type" placeholder="Enter participants list with commas" class="inputs" required>
        </label>
        <label for="icon-type">
            <p class="labels">Icon</p>
            <input type="text" name="Icon" id="icon-type" placeholder="Add icon link" class="inputs" required>
        </label>
        <p class="labels">You'll add tracks later</p>
        <input type="submit" value="Submit" class="submit" id="submit-1">
    </form>`;

export function setFormText2(text) {
    formText2 = text;
}

export function getFormText2(text) {
    return formText2;
}

export function createCloseButton(id) {
    const button = `<button class="close-button" id="close-button-${id}" onclick="document.getElementById('band-info-${id}').style.display = 'none';return false"><b>X</b></button>`;
    return button;
}
