
import { ISolution, InputFile, IPosition } from '../shared';

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
   public countDots(): number {
      return new Set(this.dots.map(d => `${d.x},${d.y}`)).size;
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
      //let paper = new OrigamiPaper(inputFile.readLines());

      return '';
   }
}

export default new Solution13() as ISolution;
