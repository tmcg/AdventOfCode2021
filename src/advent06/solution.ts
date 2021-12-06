
import { ISolution, InputFile } from '../shared';

export class LanternfishSchool {
   fish: number[];
   day: number = 0;
   constructor(input: string) {
      this.fish = input.split(',').map(x => +x);
   }

   nextDay(): number {
      let newFish = this.fish.filter(n => n === 0).length;
      this.fish = this.fish.map(n => {
         return n === 0 ? 6 : n - 1;
      });

      for (let i = 0; i < newFish; i++)
         this.fish.push(8);

      this.day++;
      return this.day;
   }
}

class Solution6 implements ISolution {
   dayNumber: number = 6;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let school = new LanternfishSchool(inputFile.readText());

      while(school.nextDay() < 80);

      return '' + school.fish.length;
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      //let school = new LanternfishSchool(inputFile.readText());

      return 'xx';
   }
}

export default new Solution6() as ISolution;
