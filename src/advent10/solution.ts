
import { ISolution, InputFile, Stack, Util } from '../shared';

export class SyntaxLine {

   constructor(public input: string) {
   }

   parseInput(): [string, string] {
      let stack = new Stack<string>();

      for (let token of this.input.split('')) {
         if (['[','(','{','<'].includes(token)) {
            stack.push(token);
            continue;
         }

         if (stack.pop() !== this.flipToken(token))
            return [token, ''];
      }

      return ['', stack.toArray().map(this.flipToken).reverse().join('')];
   }

   findCorruptionScore(): number {
      let s = this.parseInput()[0];
      if (s === '') return 0;

      let n: number = 0;
      switch(s) {
         case ')': n = 3; break;
         case ']': n = 57; break;
         case '}': n = 1197; break;
         case '>': n = 25137; break;
      }
      return n;
   }

   findAutoCompleteScore(): number {
      let s = this.parseInput()[1];
      if (s === '') return 0;

      let n: number = 0;
      for (const ch of s.split('')) {
         n *= 5;
         switch(ch) {
            case ')': n += 1; break;
            case ']': n += 2; break;
            case '}': n += 3; break;
            case '>': n += 4; break;
         }
      }
      return n;
   }

   flipToken(s: string): string {
      let tokens = ['[',']','(',')','{','}','<','>'];
      let index = tokens.findIndex(t => t === s);
      return tokens[index + (index % 2 === 0 ? +1 : -1)];
   }
}

class Solution10 implements ISolution {
   dayNumber: number = 10;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let lines = inputFile.readLines().map(s => new SyntaxLine(s));

      return '' + lines.map(s => s.findCorruptionScore()).reduce((p, c) => p + c);
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let lines = inputFile.readLines().map(s => new SyntaxLine(s));

      let scores = lines.map(s => s.findAutoCompleteScore()).filter(n => n > 0).sort((a, b) => a - b);
      /*
      let logger = Util.createLogger();
      for(let score of scores)
         logger.info(score);
      */

      return '' + scores[(scores.length - 1) / 2];
   }
}

export default new Solution10() as ISolution;
