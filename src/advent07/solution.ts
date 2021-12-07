
import { ISolution, InputFile } from '../shared';

export class CrabSwarm {
   crabs: number[];

   constructor(input: string) {
      this.crabs = input.split(',').map(x => +x);
   }

   align(part: number): number {
      let min = Math.min(...this.crabs);
      let max = Math.max(...this.crabs);
      let calcFuel = part === 1 ?
         (n: number) => { return n; } :
         (n: number) => { return (n*n + n)/2; };

      let lastSum = Number.MAX_SAFE_INTEGER;
      for (let i = min; i <= max; i++) {
         let thisValue = this.crabs.map(c => Math.abs(c - i)).map(calcFuel).reduce((p,c) => p + c);

         if (thisValue < lastSum) {
            lastSum = thisValue;
         }
      }
      return lastSum;
   }

}

class Solution7 implements ISolution {
   dayNumber: number = 7;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let swarm = new CrabSwarm(inputFile.readText());

      return '' + swarm.align(1);
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let swarm = new CrabSwarm(inputFile.readText());

      return '' + swarm.align(2);
   }
}

export default new Solution7() as ISolution;
