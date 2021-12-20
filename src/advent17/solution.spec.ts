
import solution, { TrickShot } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should read input', () => {
    let shot = new TrickShot('target area: x=150..171, y=-129..-70');

    expect(shot.target.left).toBe(150);
    expect(shot.target.top).toBe(-70);
    expect(shot.target.right).toBe(171);
    expect(shot.target.bottom).toBe(-129);
  });

  it('should detect hit', () => {
    let shot = new TrickShot('target area: x=20..30, y=-10..-5');

    expect(shot.target.left).toBe(20);
    expect(shot.target.top).toBe(-5);
    expect(shot.target.right).toBe(30);
    expect(shot.target.bottom).toBe(-10);

    let result = shot.testShot({ x: 7, y: 2 });
    expect(result.hit!.x).toBe(28);
    expect(result.hit!.y).toBe(-7);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('8256');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('xx');
  });
});
