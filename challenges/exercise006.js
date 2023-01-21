export const sumMultiples = (arr) => {
    if (arr === undefined) throw new Error("arr is required");
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        if ((arr[i] % 3 === 0) || (arr[i] % 5 === 0))
            sum += arr[i];
    return sum;
};

export const isValidDNA = (str) => {
    if (str === undefined) throw new Error("str is required");
    if ((typeof str !== "string") || (str === ""))
        return false;
    for (let i = 0; i < str.length; i++)
        if (!((str[i] === "A") || (str[i] === "C") || (str[i] === "G") || (str[i] === "T")))
            return false;
    return true;
};

export const getComplementaryDNA = (str) => {
    if (str === undefined) throw new Error("str is required");//TA, CG
    let compDNA = "";
    if (!isValidDNA(str)) compDNA = "InvalidDNA";
    for (let i = 0; i < str.length; i++)
        switch (str[i]) {
            case 'A': compDNA += "T"; break;
            case 'T': compDNA += "A"; break;
            case 'C': compDNA += "G"; break;
            case 'G': compDNA += "C"; break;
            default: return ("InvalidDNA");
        }

    return compDNA;
};

export const isItPrime = (n) => {
    if (n === undefined) throw new Error("n is required");
    let divisor = 2;
    while (divisor < n / 2) {
        if (n % divisor === 0)
            return false;
        divisor++;
    }
    return true;
};

export const createMatrix = (n, fill) => {
    if (n === undefined) throw new Error("n is required");
    if (fill === undefined) throw new Error("fill is required");
    const matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
        for (let j = 0; j < n; j++)
            matrix[i][j] = fill;
    }
    return matrix;
};

export const areWeCovered = (staff, day) => {
    if (staff === undefined) throw new Error("staff is required");
    if (day === undefined) throw new Error("day is required");
    let staffCount = 0;
    if (staff.length === 0) return false;
    for (let i = 0; i < staff.length; i++) {
        if (staff[i].rota === undefined) continue;
        for (let j = 0; j < staff[i].rota.length; j++)
            if (staff[i].rota[j] === day)
                staffCount += 1;
    }
    return (staffCount === 3);
};
