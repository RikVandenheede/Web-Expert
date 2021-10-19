console.log("utils.js");

const add = function(a,b) {
    return a + b;
};

function test(a,b) {
    return a + b;
};

//module.exports = add;

//meerdere exports
module.exports = {
    add: add,
    test: test
}

// vraag hoe je meerdere dingen kan exporten om later te gebruiken