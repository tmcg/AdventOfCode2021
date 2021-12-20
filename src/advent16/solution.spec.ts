
import solution, { Packet } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should read packet literal', () => {
    let p0 = Packet.fromHex('D2FE28');

    expect(p0.version).toBe(6);
    expect(p0.typeId).toBe(4);
    expect(p0.value).toBe(2021);
  })

  it('should read packet operator (1)', () => {
    let p0 = Packet.fromHex('38006F45291200');

    expect(p0.version).toBe(1);
    expect(p0.typeId).toBe(6);
    expect(p0.value).toBe(0);
    expect(p0.sub.length).toBe(2);
    expect(p0.sub[0].version).toBe(6);
    expect(p0.sub[0].typeId).toBe(4);
    expect(p0.sub[0].value).toBe(10);
    expect(p0.sub[1].version).toBe(2);
    expect(p0.sub[1].typeId).toBe(4);
    expect(p0.sub[1].value).toBe(20);
  });

  it('should read packet operator (2)', () => {
    let p0 = Packet.fromHex('EE00D40C823060');

    expect(p0.version).toBe(7);
    expect(p0.typeId).toBe(3);
    expect(p0.value).toBe(0);
    expect(p0.sub.length).toBe(3);
    expect(p0.sub[0].version).toBe(2);
    expect(p0.sub[0].typeId).toBe(4);
    expect(p0.sub[0].value).toBe(1);
    expect(p0.sub[1].version).toBe(4);
    expect(p0.sub[1].typeId).toBe(4);
    expect(p0.sub[1].value).toBe(2);
    expect(p0.sub[2].version).toBe(1);
    expect(p0.sub[2].typeId).toBe(4);
    expect(p0.sub[2].value).toBe(3);
  });

  it('should sum packet versions', () => {
    expect(Packet.fromHex('8A004A801A8002F478').sumVersions()).toBe(16);
    expect(Packet.fromHex('620080001611562C8802118E34').sumVersions()).toBe(12);
    expect(Packet.fromHex('C0015000016115A2E0802F182340').sumVersions()).toBe(23);
    expect(Packet.fromHex('A0016C880162017C3686B18A3D4780').sumVersions()).toBe(31);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('866');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('xx');
  });
});
