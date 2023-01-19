import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("returns sum of multiples of 3 & 5", () => {
        expect(sumMultiples([3, 5, 1, 2])).toBe(8);
        expect(sumMultiples([3, 6, 9, 0])).toBe(18);
        expect(sumMultiples([3, 5, 15, 1, 22])).toBe(23);
    });

    test("returns zero if array has zero elements", () => {
        expect(sumMultiples([])).toBe(0);
        expect(sumMultiples([0, 0, 0, 0])).toBe(0);
    });

});

describe("isValidDNA", () => {
    test("return true or false depends on string of DNA", () => {
        expect(isValidDNA("ABCD")).toBe(false);
        expect(isValidDNA("CGAT")).toBe(true);
        expect(isValidDNA("ACTG")).toBe(true);
        expect(isValidDNA("GCAT")).toBe(true);
        expect(isValidDNA("ATGC")).toBe(true);
        expect(isValidDNA("A")).toBe(true);
        expect(isValidDNA("T")).toBe(true);
        expect(isValidDNA("G")).toBe(true);
        expect(isValidDNA("C")).toBe(true);
        expect(isValidDNA("Z")).toBe(false);
    });

    test("return false for invalid string of DNA", () => {
        expect(isValidDNA("")).toBe(false);
        expect(isValidDNA(" ")).toBe(false);
        expect(isValidDNA("!")).toBe(false);
        expect(isValidDNA("123")).toBe(false);
        expect(isValidDNA(123)).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("return complementary string of DNA", () => {//TA, CG
        expect(getComplementaryDNA("CGAT")).toBe("GCTA");
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("GCAT")).toBe("CGTA");
        expect(getComplementaryDNA("ATGC")).toBe("TACG");
        expect(getComplementaryDNA("AT")).toBe("TA");
        expect(getComplementaryDNA("GC")).toBe("CG");
    });

    test("return invalid string of DNA", () => {//TA, CG
        expect(getComplementaryDNA("ABCD")).toBe("InvalidDNA");
        expect(getComplementaryDNA("!")).toBe("InvalidDNA");
        expect(getComplementaryDNA("")).toBe("InvalidDNA");
        expect(getComplementaryDNA(123)).toBe("InvalidDNA");
    });

});

describe("isItPrime", () => {
    test("return true or false if it is a prime or not", () => {
        expect(isItPrime(3081)).toBe(false);
        expect(isItPrime(4157)).toBe(true);
        expect(isItPrime(6389)).toBe(true);
        expect(isItPrime(7867)).toBe(true);
    });
});

describe("createMatrix", () => {
    test("return array of arrays length n and fill should be same", () => {
        expect(createMatrix(1, "hi")).toStrictEqual([["hi"]]);
        expect(createMatrix(2, "hii")).toStrictEqual([["hii", "hii"], ["hii", "hii"]]);
        expect(createMatrix(3, "hiii")).toStrictEqual([["hiii", "hiii", "hiii"], ["hiii", "hiii", "hiii"], ["hiii", "hiii", "hiii"]]);
    });

    test("return array without fill", () => {
        expect(createMatrix(0, "hi")).toStrictEqual([]);
    });
});

describe("areWeCovered", () => {
    test("Running cafe successfully if enough staff available for given day", () => {
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }], "Monday")).toBe(false);
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Kiran", rota: ["Thursday", "Friday", "Tuesday", "Wednesday"] }], "Tuesday")).toBe(true);
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Kiran", rota: ["Thursday", "Friday", "Tuesday", "Wednesday"] }], "Wednesday")).toBe(false);
        expect(areWeCovered([{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }], "Thursday")).toBe(false);
    });

    test("Can't Run cafe if there is not staff at all", () => {
        expect(areWeCovered([{}], "Monday")).toBe(false);
        expect(areWeCovered([{ name: "Sally" },
        { name: "Pedro" },
        { name: "Kiran" }], "Tuesday")).toBe(false);

    });
});