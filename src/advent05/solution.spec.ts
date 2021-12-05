
import solution, { OceanFloor } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  function cleanOcean(): OceanFloor {
    return new OceanFloor([
      '0,9 -> 5,9',
      '8,0 -> 0,8',
      '9,4 -> 3,4',
      '2,2 -> 2,1',
      '7,0 -> 7,4',
      '6,4 -> 2,0',
      '0,9 -> 2,9',
      '3,4 -> 1,4',
      '0,0 -> 8,8',
      '5,5 -> 8,2',
    ]);
  }

  it('should read input', () => {
    let ocean = cleanOcean();

    expect(ocean.vents.length).toBe(10);

    expect(ocean.vents[0].start.x).toBe(0);
    expect(ocean.vents[0].start.y).toBe(9);
    expect(ocean.vents[0].end.x).toBe(5);
    expect(ocean.vents[0].end.y).toBe(9);

    expect(ocean.vents[1].start.x).toBe(0);
    expect(ocean.vents[1].start.y).toBe(8);
    expect(ocean.vents[1].end.x).toBe(8);
    expect(ocean.vents[1].end.y).toBe(0);
  });

  it('should plot sample vents', () => {
    let ocean = cleanOcean().plot();

    expect(ocean.field.slice(0,10)).toStrictEqual([0,0,0,0,0,0,0,1,0,0]);
    expect(ocean.field.slice(10,20)).toStrictEqual([0,0,1,0,0,0,0,1,0,0]);
    expect(ocean.field.slice(20,30)).toStrictEqual([0,0,1,0,0,0,0,1,0,0]);
    expect(ocean.field.slice(30,40)).toStrictEqual([0,0,0,0,0,0,0,1,0,0]);
    expect(ocean.field.slice(40,50)).toStrictEqual([0,1,1,2,1,1,1,2,1,1]);
    expect(ocean.field.slice(50,60)).toStrictEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(ocean.field.slice(60,70)).toStrictEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(ocean.field.slice(70,80)).toStrictEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(ocean.field.slice(80,90)).toStrictEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(ocean.field.slice(90,100)).toStrictEqual([2,2,2,1,1,1,0,0,0,0]);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('8622');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('');
  });
});
