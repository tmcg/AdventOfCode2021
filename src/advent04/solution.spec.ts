
import solution, { BingoCard } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {
  let x = true;
  let o = false;

  function cleanCard(): BingoCard {
    return new BingoCard(['22 13 17 11  0',' 8  2 23  4 24','21  9 14 16  7',' 6 10  3 18  5',' 1 12 20 15 19'])
  }

  it('should mark numbers', () => {
    let card = cleanCard();

    expect(card.numbers).toStrictEqual([22,13,17,11,0,8,2,23,4,24,21,9,14,16,7,6,10,3,18,5,1,12,20,15,19]);
    expect(card.marks).toStrictEqual([o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o]);

    expect(card.mark(99)).toBe(false);
    expect(card.marks).toStrictEqual([o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o]);

    expect(card.mark(22)).toBe(false);
    expect(card.marks).toStrictEqual([x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o]);

    expect(card.mark(19)).toBe(false);
    expect(card.marks).toStrictEqual([x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x]);

    expect(card.mark(17)).toBe(false);
    expect(card.marks).toStrictEqual([x,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x]);

    expect(card.numbers).toStrictEqual([22,13,17,11,0,8,2,23,4,24,21,9,14,16,7,6,10,3,18,5,1,12,20,15,19]);
  });

  it('should call bingo horizontal', () => {
    let card = cleanCard();

    expect(card.mark(22)).toBe(false);
    expect(card.mark(13)).toBe(false);
    expect(card.mark(17)).toBe(false);
    expect(card.mark(11)).toBe(false);
    expect(card.mark(0)).toBe(true);
  });

  it('should call bingo vertical', () => {
    let card = cleanCard();

    expect(card.mark(11)).toBe(false);
    expect(card.mark(4)).toBe(false);
    expect(card.mark(16)).toBe(false);
    expect(card.mark(18)).toBe(false);
    expect(card.mark(15)).toBe(true);
  });

  it('should call bingo diagonal', () => {
    let card = cleanCard();

    expect(card.mark(22)).toBe(false);
    expect(card.mark(2)).toBe(false);
    expect(card.mark(14)).toBe(false);
    expect(card.mark(18)).toBe(false);
    expect(card.mark(19)).toBe(true);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('31424');
  });

  it('should solve part 2', () => {
    //expect(solution.solvePart2()).toBe('');
  });
});
