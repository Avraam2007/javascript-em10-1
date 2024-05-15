const bands = require('../json/bands.json');

const participants1 = [];
let index_of = 0;
let max = 0;

bands.forEach((item) => {
    item.participants.forEach((item1) => {
        participants1.push(item1);
        if (item1.length > max) {
            max = item1.length;
            index_of = participants1.indexOf(item1);
        }
    })
})

console.log(participants1[index_of]);