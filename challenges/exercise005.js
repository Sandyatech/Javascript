export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
    for (var i = 0; i < nums.length; i++)
        if (nums[i] == n) {
            if (i == (nums.length - 1))
                return null;
            return nums[i + 1];
        }
    return null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
    var count = {1:0,0:0};
    for (var i = 0; i < str.length; i++)
        if (str[i] == "1")
            count[1] += 1;
        else
            count[0] += 1;
    return count;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
    var revDigit = 0;
  
    while (n > 0) {
        var temp = n % 10;
        n = Math.floor(n / 10);
        revDigit = (revDigit*10) + temp;
        //console.log(revDigit);
        
    }
    return revDigit;
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
    var sum = 0;
    for (var i = 0; i < arrs.length; i++)
        for (var j = 0; j < arrs[i].length; j++)
            sum += arrs[i][j];
    return sum;
};

export const arrShift = (arr) => {
    if (arr === undefined) throw new Error("arr is required");
    if (arr.length < 2)
        return arr;
    else {
        var temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length-1]= temp;
        return arr;
    }
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
    for (const key of Object.keys(haystack)) {
        if (haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase()))
            return true;
        //console.log(value);
    }
    return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
    var words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s{2,}/g, " ").split(" ");
    var dict = {};
    for (const word of words) {
        if (dict.hasOwnProperty(word.toLowerCase()))
            dict[word.toLowerCase()] += 1;
        else
            dict[word.toLowerCase()] = 1;
    }
    return dict;
};
