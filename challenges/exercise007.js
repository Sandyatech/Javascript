export const sumDigits = (n) => {
    if (n === undefined) throw new Error("n is required");
    let num = 0;
    while (n > 0) {
        num += n % 10;
        n = Math.floor(n / 10);
    }
    return num;
};

export const createRange = (start, end, step) => {
    if (start === undefined) throw new Error("start is required");
    if (end === undefined) throw new Error("end is required");
    if (step === undefined)
        step = 1;
    const range = [];
    for (let i = start; i <= end; i = i + step)
        range.push(i);
    return range;
};

export const getScreentimeAlertList = (users, date) => {
    if (users === undefined) throw new Error("users is required");
    if (date === undefined) throw new Error("date is required");
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
    const user = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users[i].screenTime.length; j++)
            if (users[i].screenTime[j].date === date)
                if (sumValues(users[i].screenTime[j].usage) > 100)
                    user.push(users[i].username);

    }
    return user;
};

export const hexToRGB = (hexStr) => {
    if (hexStr === undefined) throw new Error("hexStr is required");
    const hexToDecimal = hex => parseInt(hex, 16);
    const colRed = hexStr.substr(1, 2);
    const colGreen = hexStr.substr(3, 2);
    const colBlue = hexStr.substr(5, 2);
    return ("rgb(" + hexToDecimal(colRed) + "," + hexToDecimal(colGreen) + "," + hexToDecimal(colBlue) + ")");
};

export const findWinner = (board) => {
    if (board === undefined) throw new Error("board is required");
    let xCount = 0;
    let oCount = 0;
    let winLimit = 0;
    for (let i = 0; i < board.length; i++)
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "X")
                xCount += 1;
            else if (board[i][j] === "0")
                oCount += 1;

        }
    winLimit = (xCount + oCount) / 2;
    if (xCount > winLimit)
        return ("X");
    else if (oCount > winLimit)
        return ("0");
    else
        return null;
};
