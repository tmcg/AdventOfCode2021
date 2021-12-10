
import solution, { SyntaxLine } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should find corruption', () => {
    let samples = [
      '[({(<(())[]>[[{[]{<()<>>',
      '[(()[<>])]({[<{<<[]>>(',
      '{([(<{}[<>[]}>{[]{[(<()>',
      '(((({<>}<{<{<>}{[]{[]{}',
      '[[<[([]))<([[{}[[()]]]',
      '[{[{({}]{}}([{[{{{}}([]',
      '{<[[]]>}<{[{[{[]{()[[[]',
      '[<(<(<(<{}))><([]([]()',
      '<{([([[(<>()){}]>(<<{{',
      '<{([{{}}[<[[[<>{}]]]>[]]',
    ];

    expect(new SyntaxLine(samples[0]).findCorruption()).toBe('');
    expect(new SyntaxLine(samples[1]).findCorruption()).toBe('');
    expect(new SyntaxLine(samples[2]).findCorruption()).toBe('}');
    expect(new SyntaxLine(samples[3]).findCorruption()).toBe('');
    expect(new SyntaxLine(samples[4]).findCorruption()).toBe(')');
    expect(new SyntaxLine(samples[5]).findCorruption()).toBe(']');
    expect(new SyntaxLine(samples[6]).findCorruption()).toBe('');
    expect(new SyntaxLine(samples[7]).findCorruption()).toBe(')');
    expect(new SyntaxLine(samples[8]).findCorruption()).toBe('>');
    expect(new SyntaxLine(samples[9]).findCorruption()).toBe('');
  })

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('413733');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('');
  });
});
