import { Main } from '../src/app.js';

describe("BerlinClock-Simple Minutes Row", function () {

    const main = new Main();

    it("should return OOOO for 0 minutes", function () {

        const result = main.getSingleMinuteRow(0);
        expect(result).toBe("OOOO");

    });

    it("should return YOOO for 1 minutes", function () {

        const result = main.getSingleMinuteRow(1);
        expect(result).toBe("YOOO");

    });

    it("should return YYOO for 2 minutes", function () {

        const result = main.getSingleMinuteRow(2);
        expect(result).toBe("YYOO");

    });

    it("should return YYYO for 3 minutes", function () {

        const result = main.getSingleMinuteRow(3);
        expect(result).toBe("YYYO");

    });

    it("should return YYYY for 4 minutes", function () {
        
        const result = main.getSingleMinuteRow(4);
        expect(result).toBe("YYYY");

    });


});

describe("BerlinClock-Five Minutes Row", function () {

    const main = new Main();

    it("should return OOOOOOOOOOO for 0 minutes", function () {
        const result = main.getFiveMinutesRow(0);
        expect(result).toBe("OOOOOOOOOOO");
    });

    it("should return YOOOOOOOOOO for 5 minutes", function () {
        const result = main.getFiveMinutesRow(5);
        expect(result).toBe("YOOOOOOOOOO");
    });

    it("should return YYROOOOOOOO for 15 minutes", function () {
        const result = main.getFiveMinutesRow(15);
        expect(result).toBe("YYROOOOOOOO");
    });

    it("should return YYRYYROOOOO for 30 minutes", function () {
        const result = main.getFiveMinutesRow(30);
        expect(result).toBe("YYRYYROOOOO");
    });

    it("should return YYRYYRYYRYY for 55 minutes", function () {
        const result = main.getFiveMinutesRow(55);
        expect(result).toBe("YYRYYRYYRYY");
    });

});