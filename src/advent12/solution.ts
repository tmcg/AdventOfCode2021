
import { ISolution, InputFile, Util, Dictionary } from '../shared';

export class CaveMaze {
   routes: Dictionary<string[]> = {}
   logger: any;
   part2: boolean;

   constructor(input: string[], part2: boolean) {
      let paths = input.flatMap(line => {
         let a, b;[a, b] = line.split('-');

         if (a === 'start' || b === 'end') return [[a, b]];
         if (b === 'start' || a === 'end') return [[b, a]];
         return [[a, b], [b, a]];
      });

      paths.sort((a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]) ? -1 : 1);

      for (let path of paths) {
         let values = this.routes[path[0]] || [];
         values.push(path[1]);
         this.routes[path[0]] = values;
      }

      this.part2 = part2;
      this.logger = Util.createLogger();
      //this.logger.info(JSON.stringify(this.routes));
   }

   public isSmallCave(name: string) {
      return name[0].toLowerCase() === name[0] && name !== 'start' && name !== 'end';
   }

   public findPaths(fromNode: string, fromPath: string, paths: string[], visited: Set<string>, smallVisit: boolean) {
      let toNodes = this.routes[fromNode];
      //this.logger.info(`checking ${fromNode} from ${fromPath}`);

      if (this.isSmallCave(fromNode)) {
         if (visited.has(fromNode)) {
            if (!this.part2 || smallVisit)
               return;
            smallVisit = true;
         }

         visited.add(fromNode);
      }

      for (let toNode of toNodes) {
         if (toNode === 'end') {
            paths.push(`${fromPath} > ${fromNode} > ${toNode}`);
         } else {
            this.findPaths(toNode, `${fromPath} > ${fromNode}`, paths, new Set(visited), smallVisit);
         }
      }
   }
}

class Solution12 implements ISolution {
   dayNumber: number = 12;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let maze = new CaveMaze(inputFile.readLines(), false);

      let paths: string[] = [];
      maze.findPaths('start', '', paths, new Set(), false);
      return '' + paths.length;
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let maze = new CaveMaze(inputFile.readLines(), true);

      let paths: string[] = [];
      maze.findPaths('start', '', paths, new Set(), false);
      return '' + paths.length;
   }
}

export default new Solution12() as ISolution;
