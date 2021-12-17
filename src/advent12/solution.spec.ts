
import solution, { CaveMaze } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should read input', () => {
    let maze = new CaveMaze(['start-A', 'start-b', 'A-c', 'A-b', 'b-d', 'A-end', 'b-end'], false)

    expect(maze.isSmallCave('start')).toBe(false);
    expect(maze.isSmallCave('end')).toBe(false);
    expect(maze.isSmallCave('A')).toBe(false);
    expect(maze.isSmallCave('b')).toBe(true);
    expect(maze.isSmallCave('c')).toBe(true);
    expect(maze.isSmallCave('d')).toBe(true);

    let paths: string[] = [];
    maze.findPaths('start', '', paths, new Set(), false);
    expect(paths.length).toBe(10);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('4304');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('118242');
  });
});
