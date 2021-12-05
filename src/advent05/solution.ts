
import { ISolution, InputFile, IPosition } from '../shared';

export class Vent {
   start: IPosition;
   end: IPosition;
   horizontal: boolean;
   vertical: boolean;
   constructor(public input: string) {
      let se = input.split(' -> ');
      let s = se[0].split(',');
      let e = se[1].split(',');
      this.start = { x: +s[0], y: +s[1] };
      this.end = { x: +e[0], y: +e[1] };
      this.horizontal = this.start.y === this.end.y;
      this.vertical = this.start.x === this.end.x;

      // normalise directions to down/right/up+right/down+right
      if (this.start.x > this.end.x || (this.vertical && this.start.y > this.end.y)) {
         [this.start, this.end] = [this.end, this.start];
      }
   }
}

export class OceanFloor {
   vents: Vent[];
   field: number[];
   size: number;
   constructor(input: string[]) {
      this.vents = input.map(s => new Vent(s));
      this.size = this.findFieldSize();
      this.field = Array.from(Array(this.size * this.size)).map(_ => 0)
   }

   findFieldSize(): number {
      let sxmax = Math.max(...this.vents.map(v => v.start.x));
      let symax = Math.max(...this.vents.map(v => v.start.y));
      let exmax = Math.max(...this.vents.map(v => v.end.x));
      let eymax = Math.max(...this.vents.map(v => v.end.y));
      return Math.max(sxmax, symax, exmax, eymax) + 1;
   }

   plot(): OceanFloor {
      for (let vent of this.vents) {
         let x = vent.start.x;
         let y = vent.start.y;

         if (vent.horizontal) {
            while (x <= vent.end.x) {
               this.mark(x, y);
               x++;
            }
         }

         if (vent.vertical) {
            while (y <= vent.end.y) {
               this.mark(x, y);
               y++;
            }
         }
      }

      return this;
   }

   mark(x: number, y: number) {
      let pos = y * this.size + x;
      this.field[pos] = this.field[pos] + 1;
   }
}

class Solution5 implements ISolution {
   dayNumber: number = 5;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let ocean = new OceanFloor(inputFile.readLines()).plot();

      return '' + ocean.field.filter(x => x >= 2).length;
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      //let ocean = new OceanFloor(inputFile.readLines());

      return 'xx';
   }
}

export default new Solution5() as ISolution;
