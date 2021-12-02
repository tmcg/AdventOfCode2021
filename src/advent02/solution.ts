
import { ISolution, InputFile, Vector2 } from '../shared';

export class SubmarineCommand {
   constructor(public direction: string, public units: number) {}

   static from(line: string): SubmarineCommand {
      let s = line.split(' ');
      return new SubmarineCommand(s[0], +s[1]);
   }
}

export class Submarine {
   commands: SubmarineCommand[];
   position: Vector2 = new Vector2(0,0);
   aim: number = 0;

   constructor(input: string[]) {
      this.commands = input.map(line => SubmarineCommand.from(line));
   }

   applyCommandsPart1(): Submarine {
      for(let command of this.commands)
      {
         switch(command.direction) {
            case "up": this.position.y -= command.units; break;
            case "down": this.position.y += command.units; break;
            case "forward": this.position.x += command.units; break;
         }
      }
      return this;
   }

   applyCommandsPart2(): Submarine {
      for(let command of this.commands)
      {
         switch(command.direction) {
            case "up": this.aim -= command.units; break;
            case "down": this.aim += command.units; break;
            case "forward":
               this.position.x += command.units;
               this.position.y += this.aim * command.units;
               break;
         }
      }
      return this;
   }
}

class Solution2 implements ISolution {
   dayNumber: number = 2;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let sub = new Submarine(inputFile.readLines()).applyCommandsPart1();

      return '' + (sub.position.x * sub.position.y);
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let sub = new Submarine(inputFile.readLines()).applyCommandsPart2();

      return '' + (sub.position.x * sub.position.y);
   }
}

export default new Solution2() as ISolution;
