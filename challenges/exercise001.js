// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
    if (word === undefined) throw new Error("word is required");
    // Add your code here! 
    return (word.charAt(0).toUpperCase() + word.slice(1));

}

export function generateInitials(firstName, lastName) {
    if (firstName === undefined) throw new Error("firstName is required");
    if (lastName === undefined) throw new Error("lastName is required");
    // Add your code here!
    return (firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase());
}

export function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined) throw new Error("originalPrice is requied");
    if (vatRate === undefined) throw new Error("vatRate is required");
    // Add your code here!
    return (Math.round(originalPrice * (100 + vatRate)) / 100);
}

export function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined) throw new Error("originalPrice is required");
    if (reduction === undefined) throw new Error("reduction is required");
    // Add your code here!
    return (Math.round(originalPrice * (100 - reduction)) / 100);

}

export function getMiddleCharacter(str) {
    if (str === undefined) throw new Error("str is required");
    // Add your code here!
    if (str.length % 2 == 0) {
        return (str.substr((str.length / 2) - 1, 2));
    }
    else {
        return (str.charAt(Number(str.length / 2)));
    }

}

export function reverseWord(word) {
    if (word === undefined) throw new Error("word is required");
    // Add your code here!
    return (word.split("").reverse().join(""));
}

export function reverseAllWords(words) {
    if (words === undefined) throw new Error("words is required");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return (words);
    // Add your code here!
}

export function countLinuxUsers(users) {
    var count = 0;
    if (users === undefined) throw new Error("users is required");
    // Add your code here!
    for (var i = 0; i < users.length; i++) {
        if (users[i]["type"] == "Linux")
            count++;
    }
    return count;
}

export function getMeanScore(scores) {
    if (scores === undefined) throw new Error("scores is required");
    // Add your code here!
    const add = (a, b) => a + b;
    return (Math.round((scores.reduce(add) / scores.length) * 100) / 100);
}

export function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error("n is required");
    // Add your code here!
    if ((n % 3 == 0) && (n % 5 == 0))
        return ("fizzbuzz");
    else if ((n % 3 != 0) && (n % 5 != 0))
        return (n);
    else if ((n % 3 == 0))
        return ("fizz");
    else if ((n % 5 == 0))
        return ("buzz");
}
