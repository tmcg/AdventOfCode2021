
import solution, { SlidingWindow } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('1446');
  });

  it('should create sliding windows', () => {
    expect(SlidingWindow.create([], 3)).toStrictEqual([]);
    expect(SlidingWindow.create([], 4)).toStrictEqual([]);
    expect(SlidingWindow.create([1,2], 3)).toStrictEqual([]);
    expect(SlidingWindow.create([1,2,3], 3)).toStrictEqual([[1,2,3]]);
    expect(SlidingWindow.create([1,2,3,4], 3)).toStrictEqual([[1,2,3],[2,3,4]]);
    expect(SlidingWindow.create([1,2,3,4,5,6], 4)).toStrictEqual([[1,2,3,4],[2,3,4,5],[3,4,5,6]]);
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('1486');
  });
});
