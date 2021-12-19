
import { ISolution, InputFile, Vector2, Dictionary, Compass } from '../shared';
import Graph from 'node-dijkstra';

export class CaveSquare extends Vector2 {
   constructor(x: number, y: number, public risk: number) {
      super(x, y);
   }
}

export class ChitonCave {
   space: Dictionary<CaveSquare> = {};
   graph: Graph = new Graph();
   width: number;
   height: number;

   constructor(input: string[]) {
      this.width = input[0].length;
      this.height = input.length;

      // parse the input
      for (let j = 0; j < this.height; j++) {
         for (let i = 0; i < this.width; i++) {
            const ch = input[j][i];
            const sq = new CaveSquare(i, j, +ch);
            this.space[sq.id()] = sq;
         }
      }

      // build the graph
      for (let y = 0; y < this.height; y++) {
         for (let x = 0; x < this.width; x++) {
            this.addNode(this.squareAt(x, y)!);
         }
      }
   }

   squareAt(x: number, y: number, d: Compass | null = null): CaveSquare | null {
      if (d === Compass.East) x++
      if (d === Compass.West) x--;
      if (d === Compass.North) y--;
      if (d === Compass.South) y++;

      const id = `${x},${y}`;
      return id in this.space ? this.space[id] : null;
   }

   addNode(sq: CaveSquare) {
      const neighbours: CaveSquare[] =
         [
            this.squareAt(sq.x, sq.y, Compass.North),
            this.squareAt(sq.x, sq.y, Compass.South),
            this.squareAt(sq.x, sq.y, Compass.East),
            this.squareAt(sq.x, sq.y, Compass.West),
         ].flatMap(s => !!s ? [s] : []);

      let edges: Dictionary<number> = {}
      neighbours.forEach(ns => edges[ns.id()] = ns.risk);
      this.graph.addNode(sq.id(), edges);
   }

   findPathPart1(): number {
      const startId = this.squareAt(0, 0)!.id();
      const finishId = this.squareAt(this.width - 1, this.height - 1)!.id();
      return this.graph.path(startId, finishId, { cost: true }).cost;
   }
}

class Solution15 implements ISolution {
   dayNumber: number = 15;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let cave = new ChitonCave(inputFile.readLines());

      return '' + cave.findPathPart1();
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      //let cave = new ChitonCave(inputFile.readLines());

      return '';
   }
}

export default new Solution15() as ISolution;
