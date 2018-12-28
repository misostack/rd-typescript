// index.ts

function basicSyntax() {
    let name: string = "misostack"
    let email: string = "misostack.com@gmail.com"
    let online: boolean = false
    let yob: number = 1988

    console.log(name, email, online, yob)

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
function safetyNumber(price: number): number {
    const vat: number = 0.1
    return price * vat + price
}

function stringLiteralTypes() {
    let myFavoritePet: string = "dog"
    let sentence: string = `My favorite pet is ${myFavoritePet}`
    console.log(sentence)

    //  Type Aliases and Union Types
    type Species = "dog" | "cat" | "bird"
    // let pet1: Species = "abc" // raise error
    let pet1: Species = "dog"
    let pet2: Species = "cat"
    let pet3: Species = "bird"
}

function tuple() {
    // Declare a tuple type
    let x: [string, number]
    // Initialize it
    x = ["hello", 10] // OK
    // Initialize it incorrectly
    // x = [10, "hello"]; // Error
}

function intersectionTypes() {

}

function constEnum() {
    const enum NinjaActivity {
        Espionage,
        Sabotage,
        Assassination
    }
    // nothing generated if you just defined like this
    let myFavoriteNinjaActivity = NinjaActivity.Espionage
    console.log(myFavoriteNinjaActivity)
    console.log(NinjaActivity["Sabotage"])
    enum Color {
        Red = 1,
        Blue,
        Green
    }
    console.log(Color.Green)
    let colorName: string = Color[1]
    console.log(Color[1])

    let binary: number = 0b10
    let octal: number = 0o10
    let heximal: number = 0x10

    console.log('binary:', binary)
    console.log('octal:', octal)
    console.log('heximal:', heximal)

    // array
    let pigs: number[] = [1, 2, 3]
    console.log(pigs)
    let genericStrings: Array<string> = ["first", "2nd", "3rd"]
    console.log(genericStrings)

    const enum DayOfWeek {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(DayOfWeek.Monday)

    let unsure: any
    unsure = "a"
    console.log(unsure)
    unsure = 1
    console.log(unsure)
    unsure = { "a": 1 }
    console.log(unsure)

    const helloWorld = function (): void {
        console.log('helloWorld')
    }
    helloWorld()
}

// Array
function arrayLearning() {
    // find
    const inventory1 = [
        { name: "apple", quanlity: 2 },
        { name: "orange", quanlity: 10 },
        { name: "lemon", quanlity: 50 }
    ]
    const inventory2 = [
        { name: "khan giay", quanlity: 20 },
        { name: "khan long", quanlity: 10 },
    ]
    let inventory: Array<Object>
    inventory = inventory1.concat(inventory2)
    console.log(inventory)
    function testQuanlity(element, index, array): boolean {
        return element.quanlity > 0
    }
    if (inventory.every(testQuanlity)) {
        console.info('passed')
    } else {
        console.error('failed')
    }
}



(function () {
    basicSyntax()
    stringLiteralTypes()
    intersectionTypes()
    tuple()
    constEnum()
    arrayLearning()
})()