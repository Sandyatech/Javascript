export function getFillings(sandwich) {
    if (sandwich === undefined) throw new Error("ingredients is required");
    // Your code here!
    return (sandwich["fillings"]);
}

export function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");
    // Your code here! 
    return (person["city"] == "Manchester");
}

export function getBusNumbers(people) {
    if (people === undefined) throw new Error("people is required");
    // Your code here!
    var noOfBuses = 1;
    while (people > 40) {
        people = people - 40;
        noOfBuses++;
    }
    return noOfBuses;
}

export function countSheep(arr) {
    if (arr === undefined) throw new Error("arr is required");
    // Your code here!
    var noOfSheep = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "sheep")
            noOfSheep++;
    }

    return noOfSheep;

}

export function hasMPostCode(person) {
    if (person === undefined) throw new Error("person is required");
    // Your code here!
    //console.log(person["address"]["postCode"].charAt(0));
    return ((person["address"]["postCode"].charAt(0) == "M") && (person["address"]["city"] == "Manchester"));
}
