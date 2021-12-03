
import solution, { DiagnosticReport } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should calc rates part 1', () => {
    let input = [
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

    let rpt = new DiagnosticReport(input);
    expect(rpt.findRatesPart1()).toBe(198);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('4138664');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('');
  });
});
