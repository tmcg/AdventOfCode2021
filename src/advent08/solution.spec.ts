
import solution, { SevenSegmentList } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should read input', () => {
    let list = new SevenSegmentList([
      'be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe',
      'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc'
    ]);

    expect(list.items.length).toBe(2);
    expect(list.items[0].signals).toStrictEqual(['be','cfbegad','cbdgef','fgaecd','cgeb','fdcge','agebfd','fecdb','fabcd','edb'])
    expect(list.items[0].output).toStrictEqual(['fdgacbe','cefdb','cefbgd','gcbe']);
    expect(list.items[1].signals).toStrictEqual(['edbfga','begcd','cbg','gc','gcadebf','fbgde','acbgfd','abcde','gfcbed','gfec'])
    expect(list.items[1].output).toStrictEqual(['fcgedb','cgb','dgebacf','gc']);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('365');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('');
  });
});
