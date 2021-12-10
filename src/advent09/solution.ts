
import { ISolution, InputFile, IPosition } from '../shared';

export class LavaCave {
   hmap: number[][] = [];
   width: number;
   height: number;

   constructor(input: string[]) {
      for (let line of input) {
         this.hmap.push(line.split('').map(x => +x));
      }

      this.width = this.hmap[0].length;
      this.height = this.hmap.length;
   }

   riskAt(x: number, y: number) {
      return this.hmap[y][x] + 1;
   }

   findLowPoints(): IPosition[] {
      let ymin = 0, ymax = this.height - 1;
      let xmin = 0, xmax = this.width - 1;
      let points: IPosition[] = [];

      for (let y = 0; y < this.height; y++) {
         for (let x = 0; x < this.width; x++) {
            let val = this.hmap[y][x];
            let lows = 0;

            if (y > ymin && this.hmap[y - 1][x] > val) lows++;
            if (y < ymax && this.hmap[y + 1][x] > val) lows++;
            if (x > xmin && this.hmap[y][x - 1] > val) lows++;
            if (x < xmax && this.hmap[y][x + 1] > val) lows++;

            // bump up the total for edges
            if (y === ymin || y === ymax) lows++;
            if (x === xmin || x === xmax) lows++;

            if (lows >= 4) {
               points.push({x, y});
            }
         }
      }

      return points;
   }
}

class Solution9 implements ISolution {
   dayNumber: number = 9;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let cave = new LavaCave(inputFile.readLines());

      return '' + cave.findLowPoints().map(p => cave.riskAt(p.x, p.y)).reduce((p, c) => p + c);
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      //let cave = new LavaCave(inputFile.readLines());

      return 'xx';
   }
}

export default new Solution9() as ISolution;
