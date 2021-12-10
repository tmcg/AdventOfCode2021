
import solution, { LavaCave } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should read input', () => {
    let cave = new LavaCave(['2199943210','3987894921','9856789892','8767896789','9899965678']);

    expect(cave.hmap.length).toBe(5);
    expect(cave.hmap[0]).toStrictEqual([2,1,9,9,9,4,3,2,1,0]);
    expect(cave.hmap[1]).toStrictEqual([3,9,8,7,8,9,4,9,2,1]);
    expect(cave.hmap[2]).toStrictEqual([9,8,5,6,7,8,9,8,9,2]);
    expect(cave.hmap[3]).toStrictEqual([8,7,6,7,8,9,6,7,8,9]);
    expect(cave.hmap[4]).toStrictEqual([9,8,9,9,9,6,5,6,7,8]);
  })

  it('should find low points', () => {
    let cave = new LavaCave(['2199943210','3987894921','9856789892','8767896789','9899965678']);

    let points = cave.findLowPoints();
    expect(points.length).toBe(4);
    expect(points[0].x).toBe(1);
    expect(points[0].y).toBe(0);
    expect(points[1].x).toBe(9);
    expect(points[1].y).toBe(0);
    expect(points[2].x).toBe(2);
    expect(points[2].y).toBe(2);
    expect(points[3].x).toBe(6);
    expect(points[3].y).toBe(4);
  })

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('594');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('');
  });
});
