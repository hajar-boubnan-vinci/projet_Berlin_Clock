export class Main {

    getSingleMinuteRow(minutes) {
        const lamps = ['O', 'O', 'O', 'O'];
        for (let i = 0; i < minutes % 5; i++) {
            lamps[i] = 'Y';
        }
        return lamps.join('');

    }

    getFiveMinutesRow(minutes) {
        const lamps = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'];
        for (let i = 0; i < Math.floor(minutes / 5); i++) {
            lamps[i] = (i + 1) % 3 === 0 ? 'R' : 'Y';
        }
        return lamps.join('');
    }

    getSingleHoursRow(hours){
        const lamps = ['O','O','O','O']
        for(let i = 0; i< hours %5; i++){
            lamps[i]='R';
        }
        return lamps.join('');
    }

    getFiveHoursRow(hours){
        const lamps = ['O','O','O','O']
        for(let i = 0; i < Math.floor(hours / 5); i++){
            lamps[i] = 'R';
        }
        return lamps.join('');
    }

}