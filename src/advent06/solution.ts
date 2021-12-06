
import { ISolution, InputFile } from '../shared';

export class LanternfishSchool {
   fish: number[];
   day: number = 0;
   constructor(input: string) {
      this.fish = [0,0,0,0,0,0,0,0,0];
      for (let f of input.split(',').map(x => +x)) {
         this.fish[f]++;
      }
   }

   nextDay(): number {
      let z = this.fish.shift()!;
      this.fish[6] += z;
      this.fish.push(z);

      this.day++;
      return this.day;
   }

   total(): number {
      return this.fish.reduce((p,c) => p + c);
   }
}

class Solution6 implements ISolution {
   dayNumber: number = 6;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let school = new LanternfishSchool(inputFile.readText());

      while(school.nextDay() < 80);

      return '' + school.total();
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let school = new LanternfishSchool(inputFile.readText());

      while(school.nextDay() < 256);

      return '' + school.total();
   }
}

export default new Solution6() as ISolution;
