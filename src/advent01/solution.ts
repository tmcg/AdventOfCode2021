
import { ISolution, InputFile } from '../shared';

export class SlidingWindow {
   static create(arr: number[], size: number): number[][] {
      let len = arr.length - size + 1;
      if (len > 0) {
         return [...Array(len)].map((_,n) => arr.slice(n, n + size))
      }
      return [];
   }
}

class Solution1 implements ISolution {
   dayNumber: number = 1;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      const numbers = inputFile.readLines().map(x => +x);

      return '' + SlidingWindow.create(numbers, 2).filter(a => a[1] > a[0]).length;
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      const numbers = inputFile.readLines().map(x => +x);

      let sums = SlidingWindow.create(numbers, 3).map(a => a[0] + a[1] + a[2]);
      return '' + SlidingWindow.create(sums, 2).filter(a => a[1] > a[0]).length;
   }
}

export default new Solution1() as ISolution;
