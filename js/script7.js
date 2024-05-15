const bands = require('../json/bands.json');

function nameWithLetter(small, big) {
    const participants1 = [];
    bands.forEach((item) => {
        item.participants.forEach((item1) => {
            (item1.match(small) || item1.match(big)) ? participants1.push(item1) : null;
        })
    });
    return participants1;
}

console.log(nameWithLetter(/f/g, /F/g));