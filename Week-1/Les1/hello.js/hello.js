// Descructoring
let person = {
    firstname: "rik",
    lastname: "Vandenheede",
    print(){
        console.log(`${this.person}`);
    }
};

// nieuwe methode 
let { firstname: fname, lastname: lName } = person;

// zelfde nog korter
let { firstName, LastName} = person;

// voorbeeld 1:
let id = 1;
let person = {id, name: "rik"};
console.log(person.id);

// voorbeeld 2:
