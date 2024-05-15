const bands = require('../json/bands.json');

function trackArray(bands) {
    const newTracks = [];
    bands.forEach((item)=>{
        item.tracks.forEach((item1)=>{
            newTracks.push(item1);
        });
    });
    return newTracks;
}

const totalDuratuion = trackArray(bands).reduce((acc, item)=> acc + item.duration, 0);

console.log(`Total duration: ${Math.floor(totalDuratuion/60)}:${totalDuratuion-Math.floor(totalDuratuion/60)*60}`);