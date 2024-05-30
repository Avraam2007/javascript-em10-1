const responce = await fetch('../json/n_bands.json');
const bands = await responce.json();
const data = bands.filter(item => Object.keys(item).length !== 0 && item != null && item.constructor === Object);


class modalWindow{
    #modal=document.createElement('div');
    #modal_parent=document.createElement('div');
    #modal_block=document.createElement('div');
    #modal_close=document.createElement('div');
    #modal_body=document.createElement('div');
    constructor(text){
      this.#modal.appendChild(this.#modal_parent);
      this.#modal.appendChild(this.#modal_block);
      this.#modal_block.appendChild(this.#modal_close);
      this.#modal_block.appendChild(this.#modal_body);
      
      this.#modal_parent.onclick=this.#modal_close.onclick=this.close.bind(this);
      this.#modal_parent.style='position:fixed;top:0;left:0;with:100%;height:100%;min-height:'+document.documentElement.scrollWidth+'px;min-width:'+document.documentElement.scrollWidth+'px;opacity:0.55;background-color:black;z-index:90;';
      this.#modal_close.innerHTML='&#10006;';
      this.#modal_close.style='padding:0;position:absolute;width: 20px;height:20px;right:5px;cursor:pointer;font-size:15px;line-height:0;font:20px Arial;text-align:center;text-shadow: 0px 0px 4px black;';
      this.#modal_block.style='width:96%;max-width:650px;min-height:80px;border-radius:5px;position: fixed;top:50%;left:50%;transform: translate(-50%, -50%);background-color:white;box-shadow: 0px 0px 12px 0px black;z-index:99;';
      this.#modal_body.style='padding:2%;overflow-y:auto;';
      if(text)this.#modal_body.innerText=text;
    }
    get innerText(){
      return this.#modal_body.innerText;
    }
    set innerText(value){
      this.#modal_body.innerText=value;
    }
    get innerHTML(){
      return this.#modal_body.innerHTML;
    }
    set innerHTML(value){
      this.#modal_body.innerHTML=value;
    }
    show(){
      document.body.appendChild(this.#modal);
    //анімація
    this.#modal_block.animate([{opacity:0},
   {opacity:1}],500);
    }
    close(){
      document.body.removeChild(this.#modal);
    }
  }

function createElement1(type, class1, text1, object1, isButton, isTrack, id) {
    const el = document.createElement(type);
    el.classList.add(class1);

    if(isButton)
        el.onclick = isTrack ? () => showTrackWindow(id) : showBandWindow;

    el.appendChild(document.createTextNode(text1));
    object1.appendChild(el);
}

function showWindow(innerHTML) {
    var m=new modalWindow('Enter your data');
    m.innerHTML = innerHTML;
    m.show();  
}

function showBandWindow() {
    const text = `
        <h2>Band data</h2>
        <form id="form-2">
            <label for="">
                <p class="labels">Band name</p>
                <input type="text" name="Band name" id="band-name-type" placeholder="Enter band name" class="inputs">
            </label>
            <label for="">
                <p class="labels">Soloist</p>
                <input type="text" name="Soloist" id="soloist-type" placeholder="Enter soloist name" class="inputs">
            </label>
            <label for="">
                <p class="labels">Participants</p>
                <input type="text" name="Participants" id="participants-type" placeholder="Enter participants list with commas" class="inputs">
            </label>
            <label for="">
                <p class="labels">Icon</p>
                <input type="file" name="Icon" id="icon-type" placeholder="Add icon" class="inputs">
            </label>
            <p class="labels">You'll add tracks later</p>
            <input type="submit" value="Submit" class="submit" id="submit-1">
        </form>
    `
    showWindow(text);
}

function showTrackWindow(id) {
    const text = `
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
        </form>
    `;

    showWindow(text);

    const form = document.getElementById('form-1');
    form.onsubmit = () => {
        const trackName = document.getElementById(`track-name-type`).value.trim();
        const trackDuration = isNaN(parseInt(document.getElementById(`track-duration-type`).value)) ? 0 : Math.floor(document.getElementById(`track-duration-type`).value);
        document.getElementById(`tracks-list-${id}`).innerHTML += `<li class="track-item"><p class="item-text">${(trackName != null && trackName.trim() != "") ? trackName : "None"} — ${minSec(trackDuration)}</p></li>`;
        return false;
    }; 
}
  
  
function minSec(sec) {
    let secFormula = sec-Math.floor(sec/60)*60;
    return `${Math.floor(sec/60)} min ${secFormula == 0 ? '' : `${secFormula} sec`}`;
}

function createCloseButton(id) {
    const button = `<button class="close-button" id="close-button-${id}" onclick="document.getElementById('band-info-${id}').style.display = 'none';"><b>X</b></button>`;
    return button;
}

function elOrder(band, isFirstFirst) {
    let first = `
    <div class="first">
        <div class="cover">
            <div class="logo" style="background: url(${band.icon != '' ? band.icon : `https://placehold.co/400?text=${band.bandName.replace(" ", "+")}`}); background-size: 100%; background-position: center; background-repeat: no-repeat;"></div>
        </div>
        <h2 class="band-name" style="text-align:center;">${band.bandName != null && band.bandName.trim() != "" ? band.bandName : "No data"}</h2>
    </div>
    `;
    let participantsSort = band.participants.filter(name => name != band.soloist && name.trim() != "").join(', ');
    let trueTracks = 0;
    let tracksList = 0;
    if (band.tracks != null && band.tracks.length !== 0 && band.tracks.constructor === Array) {
        trueTracks = band.tracks.filter(item => Object.keys(item).length !== 0 && item != null && item.name.trim() != "" && item.duration != 0 && item.duration.constructor === Number);
        tracksList = trueTracks.map(item => `<li class="track-item"><p class="item-text">${item.name} — ${minSec(item.duration)}</p></li>`).join('');
    }
    else {
        tracksList = `<p class="item-text">No tracks</p>`;
    }
    let second = `
    <div class="second">
        <h2 class="soloist name">Soloist: ${band.soloist != null && band.soloist.trim() != "" ? band.soloist : "No data"}</h2>
        <p class="participants">Participants: ${(participantsSort != null && participantsSort.trim() != "") ? participantsSort : "Only solo"}</p>
        <div class="tracks" id="tracks-${band.id}">
            <h3 class="tracks-title">Tracks:</h3>
            <ul class="tracks-list" id="tracks-list-${band.id}">${tracksList}</ul>
        </div>
    </div>
    `;
    
    return isFirstFirst ? `${first}${second}` : `${second}${first}`;
}

function createItem(band, index) {
    return `
    <div class="band-info" id="band-info-${band.id}">
        ${elOrder(band, (index % 2 == 0 ? true : false))}
        ${createCloseButton(band.id)}
    </div>
    `;
}

const block = document.createElement('main');
block.classList.add('content');

createElement1('h1', 'title', 'Music bands', document.body);

block.innerHTML = data.map((band, index) => createItem(band, index)).join('<br>');

document.body.appendChild(block);

createElement1('button', 'add-band-btn', 'Add band', document.body, true, false);

data.forEach((band)=>{
    createElement1('button', 'add-track-btn', 'Add track', document.getElementById(`tracks-${band.id}`), true, true, band.id);
});