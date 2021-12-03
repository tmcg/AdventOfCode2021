
import { ISolution, InputFile } from '../shared';

export class DiagnosticItem {
   constructor(public line: string, public value: number) { }

   static from(line: string): DiagnosticItem {
      return new DiagnosticItem(line, parseInt(line, 2));
   }
}

export class DiagnosticReport {
   items: DiagnosticItem[];

   constructor(input: string[]) {
      this.items = input.map(line => DiagnosticItem.from(line));
   }

   findRatesPart1() {
      let len = this.items[0].line.length;
      let gcount = Array(len);
      gcount.fill(0);

      for (let g of this.items) {
         for (let i = 0; i < len; i++) {
            gcount[i] += (g.value & (1 << (len - i - 1))) > 0 ? 1 : -1;
         }
      }

      let gamma = '';
      let epsilon = '';
      for (let i = 0; i < len; i++) {
         gamma += (gcount[i] > 0 ? '1' : '0');
         epsilon += (gcount[i] > 0 ? '0' : '1');
      }

      return parseInt(gamma, 2) * parseInt(epsilon, 2);
   }
}

class Solution3 implements ISolution {
   dayNumber: number = 3;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let rpt = new DiagnosticReport(inputFile.readLines());

      return '' + rpt.findRatesPart1();
   }

   solvePart2(): string {
      //const inputFile = new InputFile(this.dayNumber);
      //let rpt = new DiagnosticReport(inputFile.readLines());

      return '';
   }
}

export default new Solution3() as ISolution;
