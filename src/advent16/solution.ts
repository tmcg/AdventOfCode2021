
import { ISolution, InputFile } from '../shared';

export function hexToBin(input: string) {
   return [...input].map(x => {
      switch (x) {
         case '0': return '0000';
         case '1': return '0001';
         case '2': return '0010';
         case '3': return '0011';
         case '4': return '0100';
         case '5': return '0101';
         case '6': return '0110';
         case '7': return '0111';
         case '8': return '1000';
         case '9': return '1001';
         case 'A': return '1010';
         case 'B': return '1011';
         case 'C': return '1100';
         case 'D': return '1101';
         case 'E': return '1110';
         case 'F': return '1111';
      }
      return '';
   }).join('');
}

export class Packet {
   version: number = 0;
   typeId: number = 0;
   input: string = '';
   start: number = 0;
   size: number = 0;
   value: number = 0;
   sub: Packet[] = [];

   constructor(input: string, start: number) {
      this.version = Packet.parseBits(input, start, 3);
      this.typeId = Packet.parseBits(input, start + 3, 3);
      this.input = input;
      this.start = start;
      this.size = 6;

      this.parsePayload();
   }

   static fromHex(input: string): Packet {
      return new Packet(hexToBin(input), 0);
   }

   static parseBits(input: string, offset: number, length: number): number {
      return parseInt(Packet.slice(input, offset, length), 2);
   }

   static slice(input: string, offset: number, length: number): string {
      return input.slice(offset, offset + length);
   }

   static valueAt(input: string, offset: number): boolean {
      return input.charAt(offset) === '1';
   }

   parsePayload() {
      if (this.typeId == 4) {
         this.parseLiteral();
      } else {
         this.parseOperator();
      }
   }

   parseLiteral() {
      let more = true;
      let result = '';
      while (more) {
         more = Packet.valueAt(this.input, this.start + this.size);
         result += Packet.slice(this.input, this.start + this.size + 1, 4);
         this.size += 5;
      }

      this.value = parseInt(result, 2);
   }

   parseOperator() {
      let lengthIsPackets = Packet.valueAt(this.input, this.start + this.size);
      let lengthSize = lengthIsPackets ? 12 : 16;
      let lengthValue = Packet.parseBits(this.input, this.start + this.size + 1, lengthSize - 1);
      this.size += lengthSize;

      let read = 0;
      while (read < lengthValue) {
         let packet = new Packet(this.input, this.start + this.size);
         this.sub.push(packet);
         this.size += packet.size;
         read += lengthIsPackets ? 1 : packet.size;
      }
   }

   checksum(): number {
      return this.version + this.sub.map(s => s.checksum()).reduce((p, c) => p + c, 0);
   }

   evaluate(): number {
      let subEval = this.sub.map(s => s.evaluate());

      switch (this.typeId) {
         case 0: return subEval.reduce((p, c) => p + c, 0);
         case 1: return subEval.reduce((p, c) => p * c, 1);
         case 2: return Math.min(...subEval);
         case 3: return Math.max(...subEval);
         case 4: return this.value;
         case 5: return (subEval[0] || 0) > (subEval[1] || 0) ? 1 : 0;
         case 6: return (subEval[0] || 0) < (subEval[1] || 0) ? 1 : 0;
         case 7: return (subEval[0] || 0) === (subEval[1] || 0) ? 1 : 0;
      }

      return 0;
   }
}

class Solution16 implements ISolution {
   dayNumber: number = 16;

   solvePart1(): string {
      const inputFile = new InputFile(this.dayNumber);
      let p0 = Packet.fromHex(inputFile.readText());

      return '' + p0.checksum();
   }

   solvePart2(): string {
      const inputFile = new InputFile(this.dayNumber);
      let p0 = Packet.fromHex(inputFile.readText());

      return '' + p0.evaluate();
   }
}

export default new Solution16() as ISolution;
