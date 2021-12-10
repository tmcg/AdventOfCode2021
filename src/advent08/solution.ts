
import { ISolution, InputFile, SetUtil } from '../shared';

export class SevenSegmentDisplay {
   constructor(public signals: string[], public output: string[]) {
   }

   calcPart1(): number {
      return this.output.filter(o => [2, 3, 4, 7].includes(o.length)).length;
   }

   calcPart2(): number {
      let sig = this.signals.map(s => new Set([...s]));
      let out = this.output.map(s => new Set([...s]));

      let d1 = sig.filter(s => s.size === 2)[0];
      let d4 = sig.filter(s => s.size === 4)[0];
      let d7 = sig.filter(s => s.size === 3)[0];
      let d8 = sig.filter(s => s.size === 7)[0];

      let set069 = sig.filter(s => s.size === 6);
      let set09 = set069.filter(s => SetUtil.isSuperset(s, d1));
      let d9 = set09.filter(s => SetUtil.isSuperset(s, d4))[0];
      let d0 = set09.filter(s => !SetUtil.isSuperset(s, d4))[0];
      let d6 = set069.filter(s => !SetUtil.areEqual(s, d0) && !SetUtil.areEqual(s, d9))[0];

      let set235 = sig.filter(s => s.size === 5);
      let d3 = set235.filter(s => SetUtil.isSuperset(s, d1))[0];
      let d5 = set235.filter(s => SetUtil.isSuperset(d6, s))[0];
      let d2 = set235.filter(s => !SetUtil.areEqual(s, d3) && !SetUtil.areEqual(s, d5))[0];

      let ixs = [d0, d1, d2, d3, d4, d5, d6, d7, d8, d9];
      let ixo = out.map(o => ixs.findIndex(t => SetUtil.areEqual(t, o)));
      return ixo[0] * 1000 + ixo[1] * 100 + ixo[2] * 10 + ixo[3];
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

   public findSumPart1(): number {
      return this.items.map(d => d.calcPart1()).reduce((p, c) => p + c);
   }

   public findSumPart2(): number {
      return this.items.map(d => d.calcPart2()).reduce((p, c) => p + c);
   }
}

class Solution8 implements ISolution {
   dayNumber: number = 8;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let list = new SevenSegmentList(inputFile.readLines());

      return '' + list.findSumPart1();
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let list = new SevenSegmentList(inputFile.readLines());

      return '' + list.findSumPart2();;
   }
}

export default new Solution8() as ISolution;
