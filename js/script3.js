const bands = require('../json/bands.json');

const participants1 = [];
bands.forEach((item) => {
    item.participants.forEach((name) => {
        name != item.soloist ? participants1.push(name) : null;
    })
})
console.log(participants1);