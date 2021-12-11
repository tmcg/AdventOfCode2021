
import solution, { OctopusSwarm } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should read input', () => {
    let swarm = new OctopusSwarm(['11111','19991','19191','19991','11111']);

    expect(swarm.width).toBe(5);
    expect(swarm.height).toBe(5);
    expect(swarm.emap[0].join('')).toBe('11111');
    expect(swarm.emap[1].join('')).toBe('19991');
    expect(swarm.emap[2].join('')).toBe('19191');
    expect(swarm.emap[3].join('')).toBe('19991');
    expect(swarm.emap[4].join('')).toBe('11111');
  });

  it('should step', () => {
    let swarm = new OctopusSwarm(['11111','19991','19191','19991','11111']);

    expect(swarm.step()).toBe(9);
    expect(swarm.emap[0].join('')).toBe('34543');
    expect(swarm.emap[1].join('')).toBe('40004');
    expect(swarm.emap[2].join('')).toBe('50005');
    expect(swarm.emap[3].join('')).toBe('40004');
    expect(swarm.emap[4].join('')).toBe('34543');

    expect(swarm.step()).toBe(0);
    expect(swarm.emap[0].join('')).toBe('45654');
    expect(swarm.emap[1].join('')).toBe('51115');
    expect(swarm.emap[2].join('')).toBe('61116');
    expect(swarm.emap[3].join('')).toBe('51115');
    expect(swarm.emap[4].join('')).toBe('45654');
  });


  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('1625');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('xx');
  });
});
