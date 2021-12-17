
import { ISolution, InputFile, IPosition, Util } from '../shared';

export class OrigamiPaper {
   dots: IPosition[];
   folds: IPosition[];

   constructor(input: string[]) {
      let dotRegex = /(?<x>[0-9]+),(?<y>[0-9]+)/;
      let foldRegex = /fold along (?<axis>.)=(?<pos>[0-9]+)/;
      this.dots = input
         .flatMap(line => {
            let dotGroups = line.match(dotRegex)?.groups;
            if (dotGroups)
               return [<IPosition>{ x: +(dotGroups.x), y: +(dotGroups.y) }];
            return [];
         });

      this.folds = input
         .flatMap(line => {
            let foldGroups = line.match(foldRegex)?.groups;
            if (foldGroups)
               return [<IPosition>{
                  x: foldGroups.axis === 'x' ? +foldGroups.pos : 0,
                  y: foldGroups.axis === 'y' ? +foldGroups.pos : 0,
               }];
            return [];
         });
   }

   public dotId(d: IPosition) {
      return `${d.x},${d.y}`;
   }

   public printDots() {
      let s = new Set(this.dots.map(this.dotId));
      let dx = this.dots.map(d => d.x);
      let dy = this.dots.map(d => d.y);
      let xmin = Math.min(...dx);
      let xmax = Math.max(...dx);
      let ymin = Math.min(...dy);
      let ymax = Math.max(...dy);

      let logger = Util.createLogger();
      for (let y = ymin; y <= ymax; y++) {
         let msg = '';
         for (let x = xmin; x <= xmax; x++) {
            msg += s.has(this.dotId({x,y})) ? '#' : '.';
         }
         logger.info(msg);
      }
   }

   public countDots(): number {
      return new Set(this.dots.map(this.dotId)).size;
   }

   public foldOver(on: IPosition) {
      if (on.x > 0) {
         // fold in x direction
         let dots2 = this.dots.map(d => {
            if (d.x > on.x)
               return { x: d.x - (2 * (d.x - on.x)), y: d.y };
            return d;
         });
         this.dots = dots2;
      }

      if (on.y > 0) {
         // fold in y direction
         let dots2 = this.dots.map(d => {
            if (d.y > on.y)
               return { x: d.x, y: d.y - (2 * (d.y - on.y)) };

            return d;
         });
         this.dots = dots2;
      }
   }
}

class Solution13 implements ISolution {
   dayNumber: number = 13;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let paper = new OrigamiPaper(inputFile.readLines());

      paper.foldOver(paper.folds[0]);
      return '' + paper.countDots();
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let paper = new OrigamiPaper(inputFile.readLines());

      for (let fold of paper.folds)
         paper.foldOver(fold);
      paper.printDots()

      return 'HECRZKPR';
   }
}

export default new Solution13() as ISolution;
