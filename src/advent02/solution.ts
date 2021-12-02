
import { ISolution, InputFile, Vector2 } from '../shared';

export class SubmarineCommand {
   constructor(public direction: string, public distance: number) {}

   static from(line: string): SubmarineCommand {
      let s = line.split(' ');
      return new SubmarineCommand(s[0], +s[1]);
   }
}

export class Submarine {
   commands: SubmarineCommand[];
   position: Vector2;

   constructor(input: string[]) {
      this.commands = input.map(line => SubmarineCommand.from(line));
      this.position = new Vector2(0,0);
   }

   applyAllCommands(): Submarine {
      for(let command of this.commands)
         this.applyCommand(command);
      return this;
   }

   applyCommand(command: SubmarineCommand) {
      switch(command.direction) {
         case "up": this.position.y -= command.distance; break;
         case "down": this.position.y += command.distance; break;
         case "forward": this.position.x += command.distance; break;
      }
   }
}

class Solution2 implements ISolution {
   dayNumber: number = 2;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let sub = new Submarine(inputFile.readLines()).applyAllCommands();

      return '' + (sub.position.x * sub.position.y);
   }

   solvePart2(): string {
      //const inputFile = new InputFile(this.dayNumber);
      //let sub = new Submarine(inputFile.readLines()).applyAllCommands();

      return '99';
   }
}

export default new Solution2() as ISolution;
