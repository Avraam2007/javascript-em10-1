const bands = require('../json/bands.json');

function fillArray(bands, newTracks) {
    bands.forEach((item)=>{
        newTracks.push(item.tracks);
    })
}

let newTracks = [];
fillArray(bands, newTracks);

let max = [];

newTracks.forEach((item)=>{
    maxDur = 0
    item.forEach((item1)=>{
        if(item1.duration > maxDur){
            maxDur = item1.duration;
        };
    });
    max.push(maxDur);
});

const newTracks1 = [];

newTracks.forEach((item,index)=>{
    item.forEach((item1)=>{
        if (item1.duration == max[index]) {
            newTracks1.push(item1);
        }
    });
});

const newBands = bands.map(({bandName}, index) => ({bandName : bandName, track_name : newTracks1[index].name, track_duration : newTracks1[index].duration}));
console.log(newBands);