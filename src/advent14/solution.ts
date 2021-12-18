
import { ISolution, InputFile, Dictionary } from '../shared';

export class PolymerTemplate {
   chain: string;
   rules: Dictionary<string>;

   constructor(input: string[]) {
      this.chain = input[0];
      this.rules = {};
      for (let line of input.slice(2)) {
         let rule = line.split(' -> ');
         this.rules[rule[0]] = rule[1];
      }
   }

   public step() {
      let newChain = '';
      for (let i = 0; i < this.chain.length - 1; i++) {
         const c1 = this.chain[i];
         const c2 = this.chain[i + 1];
         const cx = this.rules[c1 + c2] || '';
         newChain = newChain + c1 + cx;
      }
      newChain += this.chain.charAt(this.chain.length - 1);
      this.chain = newChain;
   }

   calcPart1(): number {
      [...Array(10)].forEach(_ => this.step());

      let dict: Dictionary<number> = {}
      for (let i = 0; i < this.chain.length; i++) {
         let c = this.chain.charAt(i);
         dict[c] = (dict[c] || 0) + 1;
      }

      let freq = Object.keys(dict).map(k => <[string,number]>[k, dict[k]]);
      freq.sort((a,b) => a[1] - b[1]);

      return freq[freq.length - 1][1] - freq[0][1];
   }
}

class Solution14 implements ISolution {
   dayNumber: number = 14;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let pt = new PolymerTemplate(inputFile.readLines());

      return '' + pt.calcPart1();
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      //let pt = new PolymerTemplate(inputFile.readLines());

      return '';
   }
}

export default new Solution14() as ISolution;
