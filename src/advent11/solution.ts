
import { posix } from 'path/posix';
import { ISolution, InputFile, IPosition } from '../shared';

export class OctopusSwarm {
   emap: number[][] = [];
   fmap: boolean[][] = [];
   width: number;
   height: number;

   constructor(input: string[]) {
      for (let line of input) {
         this.emap.push(line.split('').map(x => +x));
         this.fmap.push(line.split('').map(x => false));
      }

      this.width = this.emap[0].length;
      this.height = this.emap.length;
   }

   withinGrid(pos: IPosition) {
      return pos.x >= 0 && pos.y >= 0 && pos.x < this.width && pos.y < this.height;
   }

   energyAt(pos: IPosition): number {
      if (!this.withinGrid(pos))
         return 0;

      return this.emap[pos.y][pos.x];
   }

   addEnergy(pos: IPosition): number {
      if (!this.withinGrid(pos))
         return 0;

      this.emap[pos.y][pos.x] += 1;
      return this.emap[pos.y][pos.x];
   }

   flash(pos: IPosition) {
      if (!this.withinGrid(pos))
         return;

      if (!this.fmap[pos.y][pos.x]) {
         this.fmap[pos.y][pos.x] = true;
         for (let j = -1; j <= 1; j++) {
            for (let i = -1; i <= 1; i++) {
               if (i === 0 && j === 0) continue;
               let check: IPosition = { x: pos.x + i, y: pos.y + j }
               if (this.addEnergy(check) > 9)
                  this.flash(check);
            }
         }
      }
   }

   forEach(fn: (pos: IPosition) => void) {
      for (let y = 0; y < this.height; y++) {
         for (let x = 0; x < this.width; x++) {
            fn({x, y});
         }
      }
   }

   step(): number {
      this.forEach(pos => {
         if (this.addEnergy(pos) > 9) {
            this.flash(pos);
         }
      })

      let flashCount = 0;
      this.forEach(pos => {
         if (this.emap[pos.y][pos.x] > 9)
            this.emap[pos.y][pos.x] = 0;
         if (this.fmap[pos.y][pos.x])
            flashCount++;

         this.fmap[pos.y][pos.x] = false;
      });

      return flashCount;
   }

   countFlashes(steps: number): Number {
      let flashCount = 0;
      for (let step = 0; step < steps; step++) {
         flashCount += this.step();
      }
      return flashCount;
   }
}

class Solution11 implements ISolution {
   dayNumber: number = 11;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let swarm = new OctopusSwarm(inputFile.readLines());

      return '' + swarm.countFlashes(100);
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      //let swarm = new OctopusSwarm(inputFile.readLines());

      return '';
   }
}

export default new Solution11() as ISolution;
