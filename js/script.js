// Ніяк не хоче працювати require, як клас JSON. До речі, Ви запрошені на колаборацію в моєму репозиторії
// const fs = require('fs');
// const responce = await fetch(fs.existsSync('../json/cache.json') ? '../json/cache.json' : '../json/n_bands.json');
import { getFormText2, getFormText1, createCloseButton, getLi } from "./text_base.js";
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
    const text = getFormText2();
    showWindow(text);

    const form = document.getElementById('form-2');
    form.onsubmit = e => {
        e.preventDefault();
        const newParticipants = document.getElementById(`participants-type`).value.split(', ');
        const newBand = {
            id: lastId+1,
            soloist: document.getElementById(`soloist-type`).value,
            bandName: document.getElementById(`band-name-type`).value,
            icon: document.getElementById(`icon-type`).value,
            participants: newParticipants,
            tracks: 0
        };
        data.push(newBand);

        document.getElementById('content').innerHTML += createItem(newBand, lastId);

        createElement1('button', 'add-track-btn', 'Add track', document.getElementById(`tracks-${lastId+1}`), true, true, lastId+1);
        lastId++;
        return false;
    }; 
}

function showTrackWindow(id1) {
    const text = getFormText1();

    showWindow(text);

    const form = document.getElementById('form-1');
    form.onsubmit = (e) => {
        e.preventDefault();
        const trackName = document.getElementById(`track-name-type`).value.trim();
        const trackDuration = isNaN(parseInt(document.getElementById(`track-duration-type`).value)) ? 0 : Math.floor(document.getElementById(`track-duration-type`).value);
        document.getElementById(`tracks-list-${id1}`).innerHTML += getLi((trackName != null && trackName.trim() != "") ? trackName : "None", minSec(trackDuration));

        return false;
    }; 
}
  
  
function minSec(sec) {
    return sec < 0 ? `Negative time` : `${Math.floor(sec/60)} min ${sec%60 == 0 ? '' : `${sec%60} sec`}`;
}

function elOrder(band, isFirstFirst) {
    let first = `
    <div class="first">
        <div class="cover">
            <div class="logo" style="background: url(${band.icon.trim() != '' && band.icon.startsWith("https://") ? band.icon : `https://placehold.co/400?text=${band.bandName.replace(" ", "+")}`}); background-size: 100%; background-position: center; background-repeat: no-repeat;"></div>
        </div>
        <h2 class="band-name" style="text-align:center;">${band.bandName != null && band.bandName.trim() != "" ? band.bandName : "No data"}</h2>
    </div>
    `;
    let participantsSort = band.participants.filter(name => name != band.soloist && name.trim() != "").join(', ');
    let trueTracks = 0;
    let tracksList = 0;
    if (band.tracks != null && band.tracks.length !== 0 && band.tracks.constructor === Array) {
        trueTracks = band.tracks.filter(item => Object.keys(item).length !== 0 && item != null && item.name.trim() != "" && item.duration != 0 && item.duration.constructor === Number);
        tracksList = trueTracks.map(item => getLi(item.name, minSec(item.duration))).join('');
    }
    else {
        tracksList = `<p class="item-text">Click "Add track" button to add tracks info</p>`;
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
block.setAttribute("id", "content");

createElement1('h1', 'title', 'Music bands', document.body);

block.innerHTML = data.map((band, index) => createItem(band, index)).join('<br>');

document.body.appendChild(block);

let lastId = data[data.length - 1].id;
createElement1('button', 'add-band-btn', 'Add band', document.body, true, false, lastId);

data.forEach((band)=>{
    createElement1('button', 'add-track-btn', 'Add track', document.getElementById(`tracks-${band.id}`), true, true, band.id);
});