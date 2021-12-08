
import { ISolution, InputFile } from '../shared';

export class SevenSegmentDisplay {

   constructor(public signals: string[], public output: string[]) {
   }
}

export class SevenSegmentList {
   items: SevenSegmentDisplay[];

   constructor(input: string[]) {
      this.items = input.map(line => {
         let so = line.split(' | ');
         return new SevenSegmentDisplay(so[0].split(' '), so[1].split(' '));
      })
   }

   public findSumOf1478(): number {
      return this.items
         .map(d => d.output.filter(o => [2,3,4,7].includes(o.length)).length)
         .reduce((p, c) => p + c);
   }
}

class Solution8 implements ISolution {
   dayNumber: number = 8;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let list = new SevenSegmentList(inputFile.readLines());

      return '' + list.findSumOf1478();
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      //let list = new SevenSegmentList(inputFile.readLines());

      return 'xx';
   }
}

export default new Solution8() as ISolution;
