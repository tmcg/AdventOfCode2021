
import { ISolution, InputFile, Vector2, Dictionary, Compass, Util } from '../shared';
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

   constructor(input: string[], tile: number = 1) {
      let inputWidth = input[0].length;
      let inputHeight = input.length;

      this.width = inputWidth * tile;
      this.height = inputHeight * tile;

      // parse the input
      for (let j = 0; j < this.height; j++) {
         for (let i = 0; i < this.width; i++) {
            const ch = input[j % inputHeight][i % inputWidth];
            let risk = (+ch + Math.floor(i / inputWidth) + Math.floor(j / inputHeight));
            const sq = new CaveSquare(i, j, ((risk - 1) % 9) + 1);
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

   findPath(): number {
      const startId = this.squareAt(0, 0)!.id();
      const finishId = this.squareAt(this.width - 1, this.height - 1)!.id();
      return this.graph.path(startId, finishId, { cost: true }).cost;
   }

   print() {
      let logger = Util.createLogger();
      for (let j = 0; j < this.height; j++) {
         let s = '';
         for (let i = 0; i < this.width; i++) {
            s += this.squareAt(i, j)!.risk;
         }
         logger.info(s);
      }
   }
}

class Solution15 implements ISolution {
   dayNumber: number = 15;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let cave = new ChitonCave(inputFile.readLines());

      return '' + cave.findPath();
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let cave = new ChitonCave(inputFile.readLines(), 5);

      return '' + cave.findPath();
   }
}

export default new Solution15() as ISolution;
