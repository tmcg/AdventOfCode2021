
import solution, { DiagnosticReport } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  const testInput = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];


  it('should calc rates part 1', () => {
    let rpt = new DiagnosticReport(testInput);
    expect(rpt.findRatesPart1()).toStrictEqual(['10110','01001']);
  });

  it('should calc rates part 2', () => {
    let rpt = new DiagnosticReport(testInput);
    expect(rpt.findRatesPart2()).toStrictEqual(['10111','01010']);
  });


  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('4138664');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('4273224');
  });
});
