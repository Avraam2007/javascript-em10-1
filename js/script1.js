const bands = require('../json/bands.json');

function fillArray(bands, newTracks) {
    bands.forEach((item)=>{
        newTracks.push(item.tracks);
    })
    console.log(newTracks);  
}

const newTracks = [];
fillArray(bands, newTracks);

const trackNames = [];
newTracks.forEach((item,index)=>{
    const newNames = [];
    item.forEach((item1)=>{
        newNames.push(item1.name);
    });
    trackNames.push(newNames);
});

const newBands = bands.map(({bandName}, index) => ({bandName : bandName, tracks : trackNames[index]}));
console.log(newBands);