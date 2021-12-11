
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

    expect(new SyntaxLine(samples[0]).parseInput()[0]).toBe('');
    expect(new SyntaxLine(samples[1]).parseInput()[0]).toBe('');
    expect(new SyntaxLine(samples[2]).parseInput()[0]).toBe('}');
    expect(new SyntaxLine(samples[3]).parseInput()[0]).toBe('');
    expect(new SyntaxLine(samples[4]).parseInput()[0]).toBe(')');
    expect(new SyntaxLine(samples[5]).parseInput()[0]).toBe(']');
    expect(new SyntaxLine(samples[6]).parseInput()[0]).toBe('');
    expect(new SyntaxLine(samples[7]).parseInput()[0]).toBe(')');
    expect(new SyntaxLine(samples[8]).parseInput()[0]).toBe('>');
    expect(new SyntaxLine(samples[9]).parseInput()[0]).toBe('');
  })

  it('should find corruption with stack', () => {
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

    expect(new SyntaxLine(samples[0]).parseInput()[1]).toBe('}}]])})]');
    expect(new SyntaxLine(samples[1]).parseInput()[1]).toBe(')}>]})');
    expect(new SyntaxLine(samples[2]).parseInput()[1]).toBe('');
    expect(new SyntaxLine(samples[3]).parseInput()[1]).toBe('}}>}>))))');
    expect(new SyntaxLine(samples[4]).parseInput()[1]).toBe('');
    expect(new SyntaxLine(samples[5]).parseInput()[1]).toBe('');
    expect(new SyntaxLine(samples[6]).parseInput()[1]).toBe(']]}}]}]}>');
    expect(new SyntaxLine(samples[7]).parseInput()[1]).toBe('');
    expect(new SyntaxLine(samples[8]).parseInput()[1]).toBe('');
    expect(new SyntaxLine(samples[9]).parseInput()[1]).toBe('])}>');
  })

  it('should find autocomplete score', () => {
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

    expect(new SyntaxLine(samples[0]).findAutoCompleteScore()).toBe(288957);
    expect(new SyntaxLine(samples[1]).findAutoCompleteScore()).toBe(5566);
    expect(new SyntaxLine(samples[2]).findAutoCompleteScore()).toBe(0);
    expect(new SyntaxLine(samples[3]).findAutoCompleteScore()).toBe(1480781);
    expect(new SyntaxLine(samples[4]).findAutoCompleteScore()).toBe(0);
    expect(new SyntaxLine(samples[5]).findAutoCompleteScore()).toBe(0);
    expect(new SyntaxLine(samples[6]).findAutoCompleteScore()).toBe(995444);
    expect(new SyntaxLine(samples[7]).findAutoCompleteScore()).toBe(0);
    expect(new SyntaxLine(samples[8]).findAutoCompleteScore()).toBe(0);
    expect(new SyntaxLine(samples[9]).findAutoCompleteScore()).toBe(294);
  })


  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('413733');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('3354640192');
  });
});
