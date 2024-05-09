// 1

function setComment(nickname, date, isVerified, starRate, desc, pros, cons, isLike = false, isDislike = false, seller = "Rozetka" ) {
    if (isNaN(parseInt(starRate)))
        starRate = 0;
    else
        starRate = parseInt(starRate % 6);
    const Comm = {
        nickname: nickname,
        date: new Date(date),
        isVerified : Boolean(isVerified),
        seller : seller,
        starRate: starRate,
        desc : desc,
        pros : pros,
        cons: cons, 
        isLike : Boolean(isLike),
        isDislike : Boolean(isDislike),
        like_btn: function() {
            Comm.isLike = !Comm.isLike;
        },
        dislike_btn: function() {
            Comm.isDislike = !Comm.isDislike;
        },
    }
    return Comm;
}

function printComment(object1) {
    console.log(object1);
}

const Comment1 = setComment("Станіслав Дегтярів", "January 28, 2024", true, 5, "Комп'ютер прийшов цілим та неушкодженним", "Гарний комп'ютер за свої гроші", "не виявив");
printComment(Comment1);
const Comment2 = setComment("Микола Парасюк", "May 06, 2022", false, 4654648, "Чудовий товар!", "Все добре", "Не виявив");
Comment2.like_btn();
printComment(Comment2);
// const Comment3 = setComment(prompt("Enter name"), prompt("Enter name. Example: May 06, 2022"), prompt("Is verified?"), prompt("Enter star rate"), prompt("Enter review"), prompt("Enter pros"), prompt("Enter cons"), prompt("Is liked?"), prompt("Is disliked?"), prompt("Enterseller of the product: "));
// printComment(Comment3);


// 2

const products =  [
    {
        id: 1,
        name: "Ноутбук",
        description: "хороший ноутбук",
        data: [{price: 12883.0, sale: 10}, {price: 22723.0, sale: 7}, {price: 11000.0, sale: 17}]
    },
    {
        id: 2,
        name: "Смартфон",
        description: "такий собі смартфон ноутбук",
        data: [{price: 2455.0, sale: 6}, {price: 2223.0, sale: 7}, {price: 5110.0, sale: 6}]
    },
    {
        id: 3,
        name: "Павербанк",
        description: "Просто павербанк",
        data: [{price: 455.0, sale: 6}, {price: 623.0, sale: 17}, {price: 810.0, sale: 20}]
    },
    {
        id: 4,
        name: "Сканер",
        description: "Крутий сканер",
        data: [{price: 855.0, sale: 19}, {price: 777.0, sale: 10}, {price: 510.0, sale: 10}]
    }
];

function justSum(index) {
    let sum = 0;
    for (let i = 0; i < products[index].data.length; i++) {
        sum += products[index].data[i].price;
    }
    return sum.toFixed(2)
}

function withSaleSum(index) {
    let sum = 0;
    for (let i = 0; i < products[index].data.length; i++) {
        sum += products[index].data[i].price * (1-((products[index].data[i].sale) / 100));
    }
    return sum.toFixed(2)
}

for (let i = 0; i < products.length; i++) {
    console.log(`\nEntity ${i+1}: \n Sum without sale: ${justSum(i)} \n Sum with sale: ${withSaleSum(i)} \n`);
}

// 3

const person = {
    name : "Sherlock",
    surname: "Holmes",
    date_born: 1854,
    date_death: undefined,
    nationality: "British",
    sex: "male",
    height: "tall",
    isMarried: false,
    address_town: "Lonodn",
    address_street: "Baker Street",
    address_number: "221B",
    address: `${this.address_town}, ${this.address_street}, ${this.address_number}`,
    job: "Private detective",
    brother: "Mycroft Holmes",
    plus: ["clever", "brave", "honest", "wise", "problem solving skill", "hard-working", "fair"],
    bad_habit: ["smoking", "drugs"],
    friends: ["Dr. Watson", "clients", "detectives", "Peter John", "policemans"],
    children: null,
    literature_skill : false,
    philosophy_skill : false,
    astronomy_skill: false,
    politics_skill: true,
    botanique_skill: false,
    geology_skill: true,
    chemistry_skill: true,
    anatomy_skill: true,
    criminalistics_skill: true,
    cryptology_skill: true,
    psychology_skill: true,
    languages: ["English", "Latin"],
    hobbies: ["violin", "boxing", "music", "fencing", "chess", "chemical experiments"],
    weapon: ["pistols", "knout", "sword", "singlestick", "bare-knuckle"],
}
