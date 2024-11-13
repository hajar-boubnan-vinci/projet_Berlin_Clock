import { Main } from "../src/app.js";

//etape 1
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

//etape 2
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

//etape 3
describe("BerlinClock - Single Hours Row", function () {
    const main = new Main();

    it("should return OOOO for 0 hours", function () {
        const result = main.getSingleHoursRow(0);
        expect(result).toBe("OOOO");
    });

    it("should return RROO for 2 hours", function () {
        const result = main.getSingleHoursRow(2);
        expect(result).toBe("RROO");
    });

    it("should return RRRO for 3 hours", function () {
        const result = main.getSingleHoursRow(3);
        expect(result).toBe("RRRO");
    });

    it("should return RRRR for 4 hours", function () {
        const result = main.getSingleHoursRow(4);
        expect(result).toBe("RRRR");
    });

    it("should return OOOO for multiples of 5 hours", function () {
        const result = main.getSingleHoursRow(5);
        expect(result).toBe("OOOO");
    });
});

//etape 4
describe("BerlinClock - Five Hours Row", function () {
    const main = new Main();

    it("should return OOOO for 0 hours", function () {
        const result = main.getFiveHoursRow(0);
        expect(result).toBe("OOOO");
    })

    it("should return ROOO for 5 hours", function () {
        const result = main.getFiveHoursRow(5);
        expect(result).toBe("ROOO");
    })

    it("should return RROO for 10 hours", function () {
        const result = main.getFiveHoursRow(10);
        expect(result).toBe("RROO");
    })

    it("should return RRRO for 15 hours", function () {
        const result = main.getFiveHoursRow(15);
        expect(result).toBe("RRRO");
    })

    it("should return RRRR for 20 hours", function () {
        const result = main.getFiveHoursRow(20);
        expect(result).toBe("RRRR");
    })

});

//etape 5
describe("BerlinClock - Seconds Lamp", function () {

    const main = new Main;

    it("should return Y for even seconds", function () {
        const result = main.getSecondsLamp(0);
        expect(result).toBe("Y");
    });

    it("should return O for odd seconds", function () {
        const result = main.getSecondsLamp(1);
        expect(result).toBe("O");
    });

    it("should return Y for 2 seconds", function () {
        const result = main.getSecondsLamp(2);
        expect(result).toBe("Y");
    });

    it("should return 0 for 3 seconds", function () {
        const result = main.getSecondsLamp(3);
        expect(result).toBe("O");
    });

});

//etape 6
describe("BerlinClock - Full Clock", function () {
    const main = new Main();

    it("should return the correct Berlin Clock representation for 00:00:00", function () {
        const result = main.getBerlinClock(0, 0, 0);
        expect(result).toBe("Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO")
    })

    it("should return the correct Berlin Clock representation for 13:17:01", function () {
        const result = main.getBerlinClock(13, 17, 1);
        expect(result).toBe("O\nRROO\nRRRO\nYYROOOOOOOO\nYYOO")
    })

    it("should return the correct Berlin Clock representation for 23:59:59", function () {
        const result = main.getBerlinClock(23, 59, 59);
        expect(result).toBe("O\nRRRR\nRRRO\nYYRYYRYYRYY\nYYYY")
    })

    it("should return the correct Berlin Clock representation for 24:00:00", function () {
        const result = main.getBerlinClock(24, 0, 0);
        expect(result).toBe("Y\nRRRR\nRRRR\nOOOOOOOOOOO\nOOOO")
    })
});