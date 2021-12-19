
import solution, { ChitonCave } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should read input', () => {
    let cave = new ChitonCave([
      '1163751742', '1381373672', '2136511328', '3694931569', '7463417111',
      '1319128137', '1359912421', '3125421639', '1293138521', '2311944581']);

    expect(cave.width).toBe(10);
    expect(cave.height).toBe(10);
    expect(cave.squareAt(0,0)?.risk).toBe(1);
    expect(cave.squareAt(0,9)?.risk).toBe(2);
    expect(cave.squareAt(9,0)?.risk).toBe(2);
    expect(cave.squareAt(2,1)?.risk).toBe(8);
    expect(cave.squareAt(0,10)).toBe(null);
    expect(cave.squareAt(10,0)).toBe(null);
    expect(cave.squareAt(9,10)).toBe(null);
    expect(cave.squareAt(10,9)).toBe(null);
    expect(cave.squareAt(10,10)).toBe(null);
  });

  it ('should find shortest path for part 1', () => {
    let cave = new ChitonCave([
      '1163751742', '1381373672', '2136511328', '3694931569', '7463417111',
      '1319128137', '1359912421', '3125421639', '1293138521', '2311944581']);

    expect(cave.findPathPart1()).toBe(40);
  })

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('621');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('xx');
  });
});
