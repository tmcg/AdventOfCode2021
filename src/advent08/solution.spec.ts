
import { SetUtil } from '../shared';
import solution, { SevenSegmentDisplay, SevenSegmentList } from './solution';

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

  it('should perform set union', () => {
    let s1 = new Set([1, 2, 3]);
    let s2 = new Set([2, 3, 4]);
    let s3 = new Set([5, 6]);
    let s4 = new Set();

    expect(SetUtil.union(s1, s2)).toStrictEqual(new Set([1, 2, 3, 4]));
    expect(SetUtil.union(s2, s3)).toStrictEqual(new Set([2, 3, 4, 5, 6]));
    expect(SetUtil.union(s3, s4)).toStrictEqual(new Set([5, 6]));
    expect(SetUtil.union(s4, s1)).toStrictEqual(new Set([1, 2, 3]));
  });

  it('should perform set intersection', () => {
    let s1 = new Set([1, 2, 3]);
    let s2 = new Set([2, 3, 4]);
    let s3 = new Set([5, 6]);
    let s4 = new Set();

    expect(SetUtil.intersect(s1, s2)).toStrictEqual(new Set([2, 3]));
    expect(SetUtil.intersect(s2, s3)).toStrictEqual(new Set([]));
    expect(SetUtil.intersect(s3, s4)).toStrictEqual(new Set([]));
    expect(SetUtil.intersect(s4, s1)).toStrictEqual(new Set([]));
  });

  it('should perform set subtraction', () => {
    let s1 = new Set([1, 2, 3]);
    let s2 = new Set([2, 3, 4]);
    let s3 = new Set([5, 6]);
    let s4 = new Set();

    expect(SetUtil.subtract(s1, s2)).toStrictEqual(new Set([1]));
    expect(SetUtil.subtract(s2, s3)).toStrictEqual(new Set([2, 3, 4]));
    expect(SetUtil.subtract(s3, s4)).toStrictEqual(new Set([5, 6]));
    expect(SetUtil.subtract(s4, s1)).toStrictEqual(new Set([]));
  });

  it('should find supersets', () => {
    let s1 = new Set([1, 2, 3]);
    let s2 = new Set([2, 3]);
    let s3 = new Set([2, 5, 6]);
    let s4 = new Set();
    let s5 = new Set([2, 3]);

    expect(SetUtil.isSuperset(s1, s2)).toBe(true);
    expect(SetUtil.isSuperset(s2, s3)).toBe(false);
    expect(SetUtil.isSuperset(s3, s4)).toBe(true);
    expect(SetUtil.isSuperset(s1, s4)).toBe(true);
    expect(SetUtil.isSuperset(s2, s5)).toBe(true);
    expect(SetUtil.isSuperset(s4, s5)).toBe(false);
  });

  it('should find part 2 sum', () => {
    let d1 = new SevenSegmentDisplay(['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab', 'cefabd', 'cdfgeb', 'eafb', 'cagedb', 'ab'], ['cdfeb', 'fcadb', 'cdfeb', 'cdbaf']);
    expect(d1.calcPart2()).toBe(5353);
  })

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('365');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('975706');
  });
});
