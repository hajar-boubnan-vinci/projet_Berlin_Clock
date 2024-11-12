export class Main {

    getSingleMinuteRow(minutes){
      const lamps = ['O','O','O','O'];
      for(let i = 0; i < minutes % 5 ; i++)
        {
        lamps[i] = 'Y';
      }
       return lamps.join('');

    }



}