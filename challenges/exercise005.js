export const findNextNumber = (nums, n) => {
    if (nums === undefined) throw new Error("nums is required");
    if (n === undefined) throw new Error("n is required");
    for (let i = 0; i < nums.length; i++)
        if (nums[i] === n) {
            if (i !== (nums.length - 1))
                return nums[i + 1];
        }
    return null;
};

export const count1sand0s = (str) => {
    if (str === undefined) throw new Error("str is required");
    return ({ 1: (str.match(/1/g) || []).length, 0: (str.match(/0/g) || []).length });
};

export const reverseNumber = (n) => {
    if (n === undefined) throw new Error("n is required");
    return parseInt(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
    if (arrs === undefined) throw new Error("arrs is required");
    return (arrs.flat().reduce((sum, currentValue) => sum + currentValue));
};

export const arrShift = (arr) => {
    if (arr === undefined) throw new Error("arr is required");
    if (arr.length >= 2)
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
};

export const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error("haystack is required");
    if (searchTerm === undefined) throw new Error("searchTerm is required");
    let found = false;
    for (const key of Object.keys(haystack))
        if (haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase()))
            found = true;
    return found;
};

export const getWordFrequencies = (str) => {
    if (str === undefined) throw new Error("str is required");
    const words = str.replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, "").replace(/\s{2,}/g, " ").split(" ");
    const dict = {};
    for (const word of words) {
        if (Object.prototype.hasOwnProperty.call(dict, word.toLowerCase()))
            dict[word.toLowerCase()] += 1;
        else
            dict[word.toLowerCase()] = 1;
    }
    return dict;
};
