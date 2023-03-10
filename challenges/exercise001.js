export function capitalize(word) {
    if (word === undefined) throw new Error("word is required");
    return (word.charAt(0).toUpperCase() + word.slice(1));

}

export function generateInitials(firstName, lastName) {
    if (firstName === undefined) throw new Error("firstName is required");
    if (lastName === undefined) throw new Error("lastName is required");
    return (firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase());
}

export function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined) throw new Error("originalPrice is requied");
    if (vatRate === undefined) throw new Error("vatRate is required");
    return (Math.round(originalPrice * (100 + vatRate)) / 100);
}

export function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined) throw new Error("originalPrice is required");
    if (reduction === undefined) throw new Error("reduction is required");
    return (Math.round(originalPrice * (100 - reduction)) / 100);

}

export function getMiddleCharacter(str) {
    if (str === undefined) throw new Error("str is required");
    return ((str.length % 2 === 0) ? str.substr((str.length / 2) - 1, 2) : str.charAt(Number(str.length / 2)));
}

export function reverseWord(word) {
    if (word === undefined) throw new Error("word is required");
    return (word.split("").reverse().join(""));
}

export function reverseAllWords(words) {
    if (words === undefined) throw new Error("words is required");
    return (words.map(element => reverseWord(element)));

}

export function countLinuxUsers(users) {
    if (users === undefined) throw new Error("users is required");
    return (users.filter(user => user.type === "Linux").length);
}

export function getMeanScore(scores) {
    if (scores === undefined) throw new Error("scores is required");
    const add = (a, b) => a + b;
    return (Math.round((scores.reduce(add) / scores.length) * 100) / 100);
}

export function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error("n is required");
    return ((n % 3 === 0) ? ((n % 5 === 0) ? "fizzbuzz" : "fizz") : (n % 5 === 0) ? "buzz" : n);
}
