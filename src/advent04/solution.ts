
import { ISolution, InputFile } from '../shared';

export class BingoCard {
   numbers: number[];
   marks: boolean[];
   bingo: boolean = false;
   constructor(public lines: string[]) {
      this.numbers = lines.join(' ').split(' ').filter(s => s).map(s => +s);
      this.marks = this.numbers.map(n => false);
   }

   get(x: number, y: number): number {
      return this.numbers[y * 5 + x]
   }

   check(x: number, y: number): boolean {
      return this.marks[y * 5 + x];
   }

   checkBingo(ix: number): boolean {
      let y = Math.floor(ix / 5);
      let x = ix % 5;

      // check horizontal
      if (this.check(0, y) && this.check(1, y) && this.check(2, y) &&
         this.check(3, y) && this.check(4, y))
         return true;

      // check vertical
      if (this.check(x, 0) && this.check(x, 1) && this.check(x, 2) &&
         this.check(x, 3) && this.check(x, 4))
         return true;

      // check diagonals
      if (this.check(2, 2) && (
         (this.check(0, 0) && this.check(1, 1) && this.check(3, 3) && this.check(4, 4)) ||
         (this.check(0, 4) && this.check(1, 3) && this.check(3, 1) && this.check(4, 0))
      ))
         return true;

      return false;
   }

   mark(draw: number): boolean {
      for (let i = 0; i < this.numbers.length; i++) {
         if (this.numbers[i] === draw) {
            this.marks[i] = true;
            if (this.checkBingo(i)) {
               this.bingo = true;
               return true;
            }
         }
      }

      return false;
   }

   sumUnmarked(): number {
      return this.numbers.filter((v, i) => !this.marks[i]).reduce((p, c) => p + c, 0);
   }
}

export class BingoGame {
   draws: number[]
   cards: BingoCard[];

   constructor(input: string[]) {
      this.draws = input[0].split(',').map(x => +x);
      this.cards = [];

      for (let i = 2; i < input.length; i += 6) {
         this.cards.push(new BingoCard(input.slice(i, i + 5)));
      }
   }
}

class Solution4 implements ISolution {
   dayNumber: number = 4;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let game = new BingoGame(inputFile.readLines());

      for (let draw of game.draws) {
         for (let card of game.cards) {
            if (card.mark(draw)) {
               return '' + (draw * card.sumUnmarked());
            }
         }
      }

      return 'xx';
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let game = new BingoGame(inputFile.readLines());

      let lastWin: BingoCard;
      for (let draw of game.draws) {
         for (let card of game.cards) {
            if (card.mark(draw)) {
               lastWin = card;
            }
         }
         game.cards = game.cards.filter(c => !c.bingo);
         if (game.cards.length === 0)
            return '' + (draw * lastWin!.sumUnmarked());
      }
      return 'xx';
   }
}

export default new Solution4() as ISolution;
