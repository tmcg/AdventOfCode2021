
import { ISolution, InputFile, Stack } from '../shared';

export class SyntaxLine {

   constructor(public input: string) {
   }

   findCorruption(): string {
      let stack = new Stack<string>();

      for (let token of this.input.split('')) {
         if (['[','(','{','<'].includes(token)) {
            stack.push(token);
            continue;
         }

         let p = stack.pop();
         if ((token === ']' && p !== '[') ||
             (token === ')' && p !== '(') ||
             (token === '}' && p !== '{') ||
             (token === '>' && p !== '<'))
            return token;
      }

      return '';
   }

   findCorruptionScore(): number {
      let s = this.findCorruption();
      let n: number = 0;
      switch(s) {
         case ')': n = 3; break;
         case ']': n = 57; break;
         case '}': n = 1197; break;
         case '>': n = 25137; break;
      }
      return n;
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

      return 'xx';
   }
}

export default new Solution10() as ISolution;
