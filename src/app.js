export class Main {

    //etape 1
    getSingleMinuteRow(minutes) {
        const lamps = ["O", "O", "O", "O"];
        for (let i = 0; i < minutes % 5; i++) {
            lamps[i] = "Y";
        }
        return lamps.join("");
    }

    //etape 2
    getFiveMinutesRow(minutes) {
        const lamps = ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"];
        for (let i = 0; i < Math.floor(minutes / 5); i++) {
            lamps[i] = (i + 1) % 3 === 0 ? "R" : "Y";
        }
        return lamps.join("");
    }

    //etape 3
    getSingleHoursRow(hours) {
        const lamps = ["O", "O", "O", "O"];
        for (let i = 0; i < hours % 5; i++) {
            lamps[i] = "R";
        }
        return lamps.join("");
    }

    //etape 4
    getFiveHoursRow(hours) {
        const lamps = ["O", "O", "O", "O"];
        for (let i = 0; i < Math.floor(hours / 5); i++) {
            lamps[i] = "R";
        }
        return lamps.join("");
    }

    //etape 5
    getSecondsLamp(seconds) {
        return seconds % 2 === 0 ? "Y" : "O";
    }

    //etape 6
    getBerlinClock(hours, minutes, seconds) {
        const SecondsLamp = this.getSecondsLamp(seconds);
        const fiveHoursRow = this.getFiveHoursRow(hours);
        const singleHoursRow = this.getSingleHoursRow(hours);
        const fiveMinutesRow = this.getFiveMinutesRow(minutes);
        const singleMinutesRow = this.getSingleMinuteRow(minutes);

        return [SecondsLamp, fiveHoursRow, singleHoursRow, fiveMinutesRow, singleMinutesRow].join("\n");
    }
}
