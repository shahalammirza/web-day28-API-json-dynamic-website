let person = {
    name:"shahalam",
    age: 26,
    fruit: 'mango',
    dish: "halim",
    friend: ['kolim','jolim', 'lolim'],
    money: 15000
}

// console.log(person);

// this object convert into JSON
// JSON.stringify

const personJson = JSON.stringify(person);
// console.log(personJson, typeof personJson);

// this json string convert to a real object 
//JSON.parse

const parseJson = JSON.parse(personJson);
// console.log(parseJson, typeof parseJson);