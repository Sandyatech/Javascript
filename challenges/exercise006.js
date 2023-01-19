/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
    if (arr === undefined) throw new Error("arr is required");
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0)
            sum += arr[i];
        else if (arr[i] % 5 === 0)
            sum += arr[i];

    }
    return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
    if (str === undefined) throw new Error("str is required");
    if ((typeof str != "string") || (str === ""))
        return false;
    for (var i = 0; i < str.length; i++) {
        if (!((str[i] === "A") || (str[i] === "C") || (str[i] === "G") || (str[i] === "T")))
            return false;

    }
    return true;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
    if (str === undefined) throw new Error("str is required");//TA, CG
    var compDNA = "";
    if (!isValidDNA(str)) compDNA = "InvalidDNA";
    for (var i = 0; i < str.length; i++)

        switch (str[i]) {
            case 'A': compDNA += "T"; break;
            case 'T': compDNA += "A"; break;
            case 'C': compDNA += "G"; break;
            case 'G': compDNA += "C"; break;
            default: return ("InvalidDNA");
        }

    return compDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
    if (n === undefined) throw new Error("n is required");
    var divisor = 2;
    while (divisor < n) {

        if (n % divisor === 0)
            return false;
        divisor++;
    }
    return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
    if (n === undefined) throw new Error("n is required");
    if (fill === undefined) throw new Error("fill is required");
    var matrix = new Array(n);
    for (var i = 0; i < n; i++) {
        matrix[i] = new Array(n);
        for (var j = 0; j < n; j++)
            matrix[i][j] = fill;
    }
    return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
    if (staff === undefined) throw new Error("staff is required");
    if (day === undefined) throw new Error("day is required");
    var staffCount = 0;
    if (staff.length === 0) return false;
    for (var i = 0; i < staff.length; i++) {
        if (staff[i].rota === undefined) continue;
        for (var j = 0; j < staff[i].rota.length; j++)
            if (staff[i].rota[j] === day)
                staffCount += 1;
    }
    return (staffCount === 3);
};
