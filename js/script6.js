// Done
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

function timeSorting(newTracks) {
    return newTracks.sort((a,b) => {return b.duration - a.duration;});
}

function nameSorting(newTracks) {
    return newTracks.sort((a,b) => {return b.name.length - a.name.length;});
}

console.log(timeSorting(trackArray(bands)));
console.log(nameSorting(trackArray(bands)));