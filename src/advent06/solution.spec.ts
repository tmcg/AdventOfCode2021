
import solution, { LanternfishSchool } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should read input', () => {
    let school = new LanternfishSchool('3,4,3,1,2');

    expect(school.fish).toStrictEqual([0,1,1,2,1,0,0,0,0]); // [3,4,3,1,2]
    expect(school.day).toBe(0);

    expect(school.nextDay()).toBe(1);
    expect(school.fish).toStrictEqual([1,1,2,1,0,0,0,0,0]); // [2,3,2,0,1]

    expect(school.nextDay()).toBe(2);
    expect(school.fish).toStrictEqual([1,2,1,0,0,0,1,0,1]); // [1,2,1,6,0,8]

    expect(school.nextDay()).toBe(3);
    expect(school.fish).toStrictEqual([2,1,0,0,0,1,1,1,1]); // [0,1,0,5,6,7,8]

    expect(school.nextDay()).toBe(4);
    expect(school.fish).toStrictEqual([1,0,0,0,1,1,3,1,2]); // [6,0,6,4,5,6,7,8,8]

    expect(school.nextDay()).toBe(5);
    expect(school.fish).toStrictEqual([0,0,0,1,1,3,2,2,1]); // [5,6,5,3,4,5,6,7,7,8]);

    expect(school.nextDay()).toBe(6);
    expect(school.fish).toStrictEqual([0,0,1,1,3,2,2,1,0]); // [4,5,4,2,3,4,5,6,6,7]

    expect(school.nextDay()).toBe(7);
    expect(school.fish).toStrictEqual([0,1,1,3,2,2,1,0,0]); // [3,4,3,1,2,3,4,5,5,6]

    while(school.nextDay() < 80);

    expect(school.total()).toBe(5934);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('395627');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('1767323539209');
  });
});
