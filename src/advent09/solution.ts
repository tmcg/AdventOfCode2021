
import { cachedDataVersionTag } from 'v8';
import { ISolution, InputFile, IPosition, Dictionary } from '../shared';

export class LavaCave {
   hmap: number[][] = [];
   bmap: string[][] = [];
   width: number;
   height: number;

   constructor(input: string[]) {
      for (let line of input) {
         this.hmap.push(line.split('').map(x => +x));
         this.bmap.push(line.split('').map(x => ''));
      }

      this.width = this.hmap[0].length;
      this.height = this.hmap.length;
   }

   basinAt(x: number, y: number) {
      if (y < 0 || y >= this.height) return 'zzz';
      if (x < 0 || x >= this.width) return 'zzz';
      return this.bmap[y][x];
   }

   heightAt(x: number, y: number) {
      if (y < 0 || y >= this.height) return 9;
      if (x < 0 || x >= this.width) return 9;
      return this.hmap[y][x];
   }

   riskAt(x: number, y: number) {
      return this.heightAt(x, y) + 1;
   }

   findLowPoints(): IPosition[] {
      let points: IPosition[] = [];

      for (let y = 0; y < this.height; y++) {
         for (let x = 0; x < this.width; x++) {
            let val = this.heightAt(x, y);

            if (this.heightAt(x, y - 1) > val
               && this.heightAt(x, y + 1) > val
               && this.heightAt(x - 1, y) > val
               && this.heightAt(x + 1, y) > val) {
               points.push({ x, y });
            }
         }
      }

      return points;
   }

   findBasins(): number {
      let points = this.findLowPoints();

      for (let point of points) {
         this.markBasins(point, -1, `${point.x},${point.y}`);
      }

      let bdict: Dictionary<number> = {};
      for (let y = 0; y < this.height; y++) {
         for (let x = 0; x < this.width; x++) {
            let bas = this.basinAt(x, y);
            if (bas !== '')
               bdict[bas] = (bdict[bas] || 0) + 1;
         }
      }

      let totals = Object.values(bdict).sort((a, b) => b - a);
      return totals[0] * totals[1] * totals[2];
   }

   markBasins(pos: IPosition, hprev: number, id: string) {
      let h = this.heightAt(pos.x, pos.y);
      if (h >= 9 || h < hprev || this.basinAt(pos.x, pos.y) !== '')
         return;

      this.bmap[pos.y][pos.x] = id;
      this.markBasins({ x: pos.x, y: pos.y - 1 }, h, id);
      this.markBasins({ x: pos.x, y: pos.y + 1 }, h, id);
      this.markBasins({ x: pos.x - 1, y: pos.y }, h, id);
      this.markBasins({ x: pos.x + 1, y: pos.y }, h, id);
   }
}

class Solution9 implements ISolution {
   dayNumber: number = 9;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let cave = new LavaCave(inputFile.readLines());

      return '' + cave.findLowPoints().map(p => cave.riskAt(p.x, p.y)).reduce((p, c) => p + c);
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let cave = new LavaCave(inputFile.readLines());

      return '' + cave.findBasins();
   }
}

export default new Solution9() as ISolution;
