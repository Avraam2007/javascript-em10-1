const bands = require('../json/bands.json');

function fillArray(bands) {
    const newTracks = [];
    bands.forEach((item)=>{
        newTracks.push(item.tracks);
    })
    return newTracks;
}

let totalDuratuion = [];

fillArray(bands).forEach((item)=>{
    totalDuratuion.push(item.reduce((acc, item)=> acc + item.duration, 0));
});

const newBands = bands.map(({bandName}, index) => ({bandName : bandName, total_duration : `${Math.floor(totalDuratuion[index]/60)}:${totalDuratuion[index]-Math.floor(totalDuratuion[index]/60)*60}`}));
console.log(newBands);