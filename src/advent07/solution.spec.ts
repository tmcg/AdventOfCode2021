
import solution, { CrabSwarm } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should solve sample swarm part 1', () => {
    let swarm = new CrabSwarm('16,1,2,0,4,2,7,1,2,14');

    expect(swarm.align(1)).toBe(37);
  });

  it('should solve sample swarm part 2', () => {
    let swarm = new CrabSwarm('16,1,2,0,4,2,7,1,2,14');

    expect(swarm.align(2)).toBe(168);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('329389');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('86397080');
  });
});
