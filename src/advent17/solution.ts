
import { ISolution, InputFile, Util, Rectangle, Vec2, Vector2 } from '../shared';

export interface TestShotResult {
   positions: Vec2[];
   hit: Vec2 | null;
}

export class TrickShot {
   target: Rectangle;

   constructor(input: string) {
      let tg = input.replace('target area: x=', '').replace(' y=', '').split(',');
      let [x1, x2] = tg[0].split('..');
      let [y2, y1] = tg[1].split('..');
      this.target = new Rectangle(+x1, +y1, +x2, +y2);
   }

   testShot(velocity: Vec2): TestShotResult {
      let currPos = new Vector2(0, 0);
      let listPos: Vec2[] = [];
      let hitPos: Vec2 | null = null;

      while (hitPos === null && currPos.y > this.target.bottom) {
         currPos.x += velocity.x;
         currPos.y += velocity.y;
         velocity.x -= velocity.x > 0 ? 1 : 0;
         velocity.y -= 1;

         listPos.push({ x: currPos.x, y: currPos.y });
         if (this.target.contains(currPos))
            hitPos = currPos;
      }

      return { positions: listPos, hit: hitPos };
   }

   testShotsPart1(): number {
      let maxY = 0;

      for (let j = 0; j < 300; j++) {
         for (let i = 0; i < 300; i++) {
            let result = this.testShot({x: i, y: j});
            if (result.hit) {
               maxY = Math.max(maxY, Math.max(...result.positions.map(p => p.y)));
            }
         }
      }

      return maxY;
   }
}

class Solution17 implements ISolution {
   dayNumber: number = 17;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let shot = new TrickShot(inputFile.readText());

      return '' + shot.testShotsPart1();
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      //let shot = new TrickShot(inputFile.readText());

      return '';
   }
}

export default new Solution17() as ISolution;
