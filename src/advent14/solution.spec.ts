
import solution, { PolymerTemplate } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  function cleanSample(): PolymerTemplate {
    return new PolymerTemplate(['NNCB', '',
      'CH -> B', 'HH -> N', 'CB -> H', 'NH -> C',
      'HB -> C', 'HC -> B', 'HN -> C', 'NN -> C',
      'BH -> H', 'NC -> B', 'NB -> B', 'BN -> B',
      'BB -> N', 'BC -> B', 'CC -> N', 'CN -> C']);
  }

  it('should read input', () => {
    let pt = cleanSample();

    expect(pt.chain).toBe('NNCB');
    expect(pt.rules['CH']).toBe('B');
    expect(pt.rules['HH']).toBe('N');
    expect(pt.rules['CN']).toBe('C');
  });

  it('should apply steps', () => {
    let pt = cleanSample();

    pt.step();
    expect(pt.chain).toBe('NCNBCHB');
    pt.step();
    expect(pt.chain).toBe('NBCCNBBBCBHCB');
    pt.step();
    expect(pt.chain).toBe('NBBBCNCCNBBNBNBBCHBHHBCHB');
    pt.step();
    expect(pt.chain).toBe('NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB');

  })

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('4517');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('xx');
  });
});
