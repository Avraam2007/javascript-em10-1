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
      this.#modal_block.style='width:96%;max-width:650px;min-height:80px;position: fixed;top:50%;left:50%;transform: translate(-50%, -50%);background-color:white;box-shadow: 0px 0px 12px 0px black;z-index:99;';
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

function showWindow(innerHTML) {
    var m=new modalWindow('Enter your data');
    m.innerHTML = innerHTML;
    m.show();  
}

function showBandWindow() {
    const text = `
        <h2>Band data</h2>
        <form>
            <label>
                <p>Band name</p>
                <input type="text" name="Band name" id="track-duration-type" placeholder="Enter band name">
            </label>
            <label>
                <p>Soloist</p>
                <input type="text" name="Soloist" id="track-duration-type" placeholder="Enter soloist name">
            </label>
            <label>
                <p>Participants</p>
                <input type="text" name="Participants" id="track-duration-type" placeholder="Enter participants list with commas">
            </label>
            <label>
                <p>Icon</p>
                <input type="file" name="Icon" id="track-duration-type" placeholder="Add icon">
            </label>
            <p>You'll add tracks later</p>
            <input type="submit" value="Submit" id="submit-1">
        </form>
    `
    showWindow(text);
}

function showTrackWindow() {
    const text = `
        <h2>Track data</h2>
        <form>
            <label>
                <p>Track name</p>
                <input type="text" name="Track name" id="track-name-type" placeholder="Enter track name">
            </label>
            <label>
                <p>Track duration</p>
                <input type="text" name="Track duration" id="track-duration-type" placeholder="Enter track duration">
            </label>
            <input type="submit" value="Submit" id="submit-2">
        </form>
    `

    showWindow(text);
}
  
  
function minSec(sec) {
    let secFormula = sec-Math.floor(sec/60)*60;
    return `${Math.floor(sec/60)} min ${secFormula == 0 ? '' : `${secFormula} sec`}`;
}

function createCloseButton(id) {
    const button = `<button class="close-button" id="close-button-${id}" onclick="document.getElementById('band-info-${id}').style.display = 'none';">X</button>`;
    return button;
}

function elOrder(band, isFirstFirst) {
    let first = `
    <div class="first">
        <div class="cover">
            <div class="logo" style="background: url(${band.icon != '' ? band.icon : `https://placehold.co/400?text=${band.bandName.replace(" ", "+")}`}); background-size: 100%; background-position: center; background-repeat: no-repeat;"></div>
        </div>
        <h2 class="band-name" style="text-align:center;">${band.bandName != null && band.bandName.replace(" ", "") != "" ? band.bandName : "No data"}</h2>
    </div>
    `;
    let participantsSort = band.participants.filter(name => name != band.soloist && name.replace(" ", "") != "").join(', ');
    let trueTracks = 0;
    let tracksList = 0;
    if (band.tracks != null && band.tracks.length !== 0 && band.tracks.constructor === Array) {
        trueTracks = band.tracks.filter(item => Object.keys(item).length !== 0 && item != null && item.name.replace(" ", "") != "" && item.duration != 0 && item.duration.constructor === Number);
        tracksList = trueTracks.map(item => `<li class="track-item"><p class="item-text">${item.name} — ${minSec(item.duration)}</p></li>`).join('');
    }
    else {
        tracksList = `<p class="item-text">No tracks</p>`;
    }
    let second = `
    <div class="second">
        <h2 class="soloist name">Soloist: ${band.soloist != null && band.soloist.replace(" ", "") != "" ? band.soloist : "No data"}</h2>
        <p class="participants">Participants: ${(participantsSort != null && participantsSort.replace(" ", "") != "") ? participantsSort : "Only solo"}</p>
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

function createElement1(type, class1, text1) {
    const el = document.createElement(type);
    el.classList.add(class1);
    el.appendChild(document.createTextNode(text1));
    document.body.appendChild(el);
}

function createButton(class1, text1, isTrack, object1) {
    const button = document.createElement("button");
    button.classList.add(class1);

    button.onclick = isTrack ? showTrackWindow : showBandWindow;

    button.appendChild(document.createTextNode(text1));
    object1.appendChild(button);
}

const block = document.createElement('main');
block.classList.add('content');

const title = createElement1('h1', 'title', 'Music bands');

block.innerHTML = data.map((band, index) => createItem(band, index)).join('<br>');

document.body.appendChild(block);

const addButton = createButton('add-band-btn', 'Add band', false, document.body);

data.forEach((band)=>{
    createButton('add-track-btn', 'Add track', true, document.getElementById(`tracks-${band.id}`));
});