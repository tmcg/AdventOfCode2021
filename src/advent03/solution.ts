
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

   findGammaEpsilon(items: DiagnosticItem[] = []) : [string, string] {
      let len = items[0].line.length;
      let gcount = Array(len);
      gcount.fill(0);

      for (let g of items) {
         for (let i = 0; i < len; i++) {
            gcount[i] += (g.value & (1 << (len - i - 1))) > 0 ? 1 : -1;
         }
      }

      let gamma = '';
      let epsilon = '';
      for (let i = 0; i < len; i++) {
         gamma += (gcount[i] > 0 ? '1' : (gcount[i] < 0 ? '0' : 'x'));
         epsilon += (gcount[i] > 0 ? '0' : (gcount[i] < 0 ? '1' : 'x'));
      }

      return [gamma, epsilon];
   }

   findRatesPart1(): [string, string] {
      return this.findGammaEpsilon(this.items);
   }

   findRatesPart2(): [string, string] {
      let rates = ['',''];
      for (let j = 0; j < 2; j++) {
         let items = this.items;
         for (let i = 0; i < items[0].line.length; i++) {
            let part1 = this.findGammaEpsilon(items);
            let search = part1[j].replace('x', j === 0 ? '1' : '0');
            items = items.filter(a =>  a.line[i] === search[i]);
            if (items.length === 1) {
               rates[j] = items[0].line;
               break;
            }
         }
      }

      return [rates[0], rates[1]];
   }
}

class Solution3 implements ISolution {
   dayNumber: number = 3;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let rpt = new DiagnosticReport(inputFile.readLines());
      let rates = rpt.findRatesPart1();
      return '' + parseInt(rates[0], 2) * parseInt(rates[1], 2);
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let rpt = new DiagnosticReport(inputFile.readLines());
      let rates = rpt.findRatesPart2();

      return '' + parseInt(rates[0], 2) * parseInt(rates[1], 2);
   }
}

export default new Solution3() as ISolution;
