import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,

} from "../challenges/exercise007";

describe("sumDigits", () => {
    test("returns sum of digits in a number", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(456)).toBe(15);
        expect(sumDigits(789)).toBe(24);

    });

    test("returns sum of digits in a zero number is zero", () => {

        expect(sumDigits(0)).toBe(0);
    });

});

describe("createRange", () => {
    test("returns range of numbers from start to end with step increment", () => {
        expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);
        expect(createRange(2, 22, 5)).toStrictEqual([2, 7, 12, 17, 22]);
        expect(createRange(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    });

    test("returns empty array if there is no stepvalue or numbers", () => {
        expect(createRange(3, 3)).toStrictEqual([3]);

    });
});

describe("getScreentimeAlertList", () => {
    test("Displays the user who used over 100minutes of screen time", () => {
        expect(getScreentimeAlertList([
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ], "2019-05-04")).toStrictEqual(["beth_1234"]);

        expect(getScreentimeAlertList([
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-05-04", usage: { mapMyRun: 100, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ], "2019-05-04")).toStrictEqual(["beth_1234", "sam_j_1989"]);

    });

    test("Displays the empty array if there is no user over 100minutes of screen time", () => {
        expect(getScreentimeAlertList([
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ], "2019-07-04")).toStrictEqual([]);

        expect(getScreentimeAlertList([
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 34 } },
                ]
            }

        ], "2019-05-04")).toStrictEqual([]);
    });

});

describe("hexToRGB", () => {
    test("Conversion of hexdecimal color format to decimal rgb format", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#FF0043")).toBe("rgb(255,0,67)");
        expect(hexToRGB("#00FF53")).toBe("rgb(0,255,83)");
    });

    test("Conversion of hexdecimal color format to decimal rgb format boundary conditions", () => {
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
    });
});

describe("findWinner", () => {
    test("return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])).toBe(null);
        expect(findWinner([
            ["X", "0", "0"],
            ["X", "X", "0"],
            ["X", "X", "0"]
        ])).toBe("X");

    });

});
