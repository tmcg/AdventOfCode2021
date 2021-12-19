
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

    expect(cave.findPath()).toBe(40);
  })

  it ('should read input part 2', () => {
    let cave = new ChitonCave(['12', '34'], 2);

    expect(cave.width).toBe(4);
    expect(cave.height).toBe(4);
    expect(cave.squareAt(0,0)?.risk).toBe(1);
    expect(cave.squareAt(0,1)?.risk).toBe(3);
    expect(cave.squareAt(1,0)?.risk).toBe(2);
    expect(cave.squareAt(1,1)?.risk).toBe(4);
    expect(cave.squareAt(2,0)?.risk).toBe(2);
    expect(cave.squareAt(2,1)?.risk).toBe(4);
    expect(cave.squareAt(3,0)?.risk).toBe(3);
    expect(cave.squareAt(3,1)?.risk).toBe(5);
    expect(cave.squareAt(3,3)?.risk).toBe(6);
    expect(cave.squareAt(4,0)).toBe(null);
    expect(cave.squareAt(0,4)).toBe(null);
    expect(cave.squareAt(4,4)).toBe(null);

    expect(cave.findPath()).toBe(21);
  })


  it ('should find shortest path for part 2', () => {
    let cave = new ChitonCave([
      '1163751742', '1381373672', '2136511328', '3694931569', '7463417111',
      '1319128137', '1359912421', '3125421639', '1293138521', '2311944581'], 5);

    //cave.print();
    expect(cave.findPath()).toBe(315);
  })

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('621');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('2904');
  });
});
