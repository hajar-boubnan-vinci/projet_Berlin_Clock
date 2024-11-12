import { Main } from '../src/app.js';

describe("BerlinClock-Simple Minutes Row",function(){
 
    const main = new Main();

    it("should return OOOO for 0 minutes",function(){
       
        const result = main.getSingleMinuteRow(0);
       expect(result).toBe("OOOO");

    });

    it("should return YOOO for 1 minutes",function(){
       
        const result = main.getSingleMinuteRow(1);
       expect(result).toBe("YOOO");

    });
    
    it("should return YYOO for 2 minutes",function(){
       
        const result = main.getSingleMinuteRow(2);
       expect(result).toBe("YYOO");

    });

    it("should return YYYO for 3 minutes",function(){
       
        const result = main.getSingleMinuteRow(3);
       expect(result).toBe("YYYO");

    });

    it("should return YYYY for 4 minutes",function(){
       
        const result = main.getSingleMinuteRow(4);
       expect(result).toBe("YYYY");

    });


});