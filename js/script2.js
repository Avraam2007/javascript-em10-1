const bands = require('../json/bands.json');

function fillArray(bands, newTracks) {
    bands.forEach((item)=>{
        newTracks.push(item.tracks);
    })
}

let newTracks = [];
fillArray(bands, newTracks);

let max = [];
let min = [];

newTracks.forEach((item)=>{
    maxDur = 0
    item.forEach((item1)=>{
        if(item1.duration > maxDur){
            maxDur = item1.duration;
        };
    });
    max.push(maxDur);
});

newTracks.forEach((item)=>{
    minDur = 0
    item.forEach((item1)=>{
        if(item1.duration < minDur){
            minDur = item1.duration;
        };
    });
    min.push(maxDur);
});

const newTracks1 = [];
const newTracks2 = [];

newTracks.forEach((item,index)=>{
    item.forEach((item1)=>{
        if (item1.duration == max[index]) {
            newTracks1.push(item1);
        }
        else if (item1.duration == min[index]) {
            newTracks2.push(item1);
        }
    });
});

const newBands1 = bands.map(({bandName}, index) => ({bandName : bandName, track_name : newTracks1[index].name, track_duration : newTracks1[index].duration}));
const newBands2 = bands.map(({bandName}, index) => ({bandName : bandName, track_name : newTracks2[index].name, track_duration : newTracks2[index].duration}));
console.log(`${newBands1}\n\n${newBands2}`);
