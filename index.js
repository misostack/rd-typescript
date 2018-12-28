// index.ts
function basicSyntax() {
    var name = "misostack";
    var email = "misostack.com@gmail.com";
    var online = false;
    var yob = 1988;
    console.log(name, email, online, yob);
    // casting :: later
    // safety, readability, tooling
    // safetyNumber("abasd") : will raise erro
}
/**
 * Add VAT for price
 *
 * @param {number} price
 * @returns {number}
 */
function safetyNumber(price) {
    var vat = 0.1;
    return price * vat + price;
}
function stringLiteralTypes() {
    var myFavoritePet = "dog";
    var sentence = "My favorite pet is " + myFavoritePet;
    console.log(sentence);
    // let pet1: Species = "abc" // raise error
    var pet1 = "dog";
    var pet2 = "cat";
    var pet3 = "bird";
}
function tuple() {
    // Declare a tuple type
    var x;
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    // x = [10, "hello"]; // Error
}
function intersectionTypes() {
}
function constEnum() {
    // nothing generated if you just defined like this
    var myFavoriteNinjaActivity = 0 /* Espionage */;
    console.log(myFavoriteNinjaActivity);
    console.log(1 /* "Sabotage" */);
    var Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Blue"] = 2] = "Blue";
        Color[Color["Green"] = 3] = "Green";
    })(Color || (Color = {}));
    console.log(Color.Green);
    var colorName = Color[1];
    console.log(Color[1]);
    var binary = 2;
    var octal = 8;
    var heximal = 0x10;
    console.log('binary:', binary);
    console.log('octal:', octal);
    console.log('heximal:', heximal);
    // array
    var pigs = [1, 2, 3];
    console.log(pigs);
    var genericStrings = ["first", "2nd", "3rd"];
    console.log(genericStrings);
    console.log(0 /* Monday */);
    var unsure;
    unsure = "a";
    console.log(unsure);
    unsure = 1;
    console.log(unsure);
    unsure = { "a": 1 };
    console.log(unsure);
    var helloWorld = function () {
        console.log('helloWorld');
    };
    helloWorld();
}
// Array
function arrayLearning() {
    // find
    var inventory1 = [
        { name: "apple", quanlity: 2 },
        { name: "orange", quanlity: 10 },
        { name: "lemon", quanlity: 50 }
    ];
    var inventory2 = [
        { name: "khan giay", quanlity: 20 },
        { name: "khan long", quanlity: 10 },
    ];
    var inventory;
    inventory = inventory1.concat(inventory2);
    console.log(inventory);
    function testQuanlity(element, index, array) {
        return element.quanlity < 0;
    }
    if (inventory.every(testQuanlity)) {
        console.info('passed');
    }
    else {
        console.error('failed');
    }
}
(function () {
    basicSyntax();
    stringLiteralTypes();
    intersectionTypes();
    tuple();
    constEnum();
    arrayLearning();
})();
