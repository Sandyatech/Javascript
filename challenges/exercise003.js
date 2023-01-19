export function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");
    // Your code here!
    return (nums.map(x => x ** 2));
}

export function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");
    // Your code here!
    var ccw = "";
    for (var i = 0; i < words.length; i++) {
        if (i === 0)
            ccw = words[i];
        else
            ccw += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return ccw;
}

export function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");
    // Your code here! 
    var noOfSub = 0;
    for (var i = 0; i < people.length; i++) {
        noOfSub += people[i].subjects.length;
    }
    return (noOfSub);
}

export function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    // Your code here!
    var ing = false;
    for (var i = 0; i < menu.length; i++)
        for (var j = 0; j < menu[i].ingredients.length; j++)
            if (menu[i].ingredients[j] === ingredient) {
                ing = true;
            }
    return ing;
}

export function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    // Your code here!
    var num = [];
    var exist;
    arr1.sort();
    arr2.sort();
    for (var i = 0; i < arr1.length; i++)
        for (var j = 0; j < arr2.length; j++) {
            exist = 0;
            if (arr1[i] === arr2[j]) {
                if (num.length === 0)
                    num.push(arr1[i]);
                else {
                    for (var k = 0; k < num.length; k++) {
                        if (num[k] === arr1[i])
                            exist = 1;
                    }
                    if (exist === 0)
                        num.push(arr1[i]);
                }
            }
        }
    return num;
}
