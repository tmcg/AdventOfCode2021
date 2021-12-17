
import solution, { OrigamiPaper } from './solution';

describe(`Advent of Code Day ${solution.dayNumber}`, () => {

  it('should read input', () => {
    let paper = new OrigamiPaper([
      '6,10', '0,14', '9,10', '0,3', '10,4', '4,11', '6,0', '6,12',
      '4,1', '0,13', '10,12', '3,4', '3,0', '8,4', '1,10', '2,14',
      '8,10', '9,0', '', 'fold along y=7', 'fold along x=5']);

    expect(paper.dots).toStrictEqual([
      { x: 6, y: 10 }, { x: 0, y: 14 }, { x: 9, y: 10 }, { x: 0, y: 3 },
      { x: 10, y: 4 }, { x: 4, y: 11 }, { x: 6, y: 0 }, { x: 6, y: 12 },
      { x: 4, y: 1 }, { x: 0, y: 13 }, { x: 10, y: 12 }, { x: 3, y: 4 },
      { x: 3, y: 0 }, { x: 8, y: 4 }, { x: 1, y: 10 }, { x: 2, y: 14 },
      { x: 8, y: 10 }, { x: 9, y: 0 },
    ])
    expect(paper.folds).toStrictEqual([{ x: 0, y: 7 }, { x: 5, y: 0 }])
  });

  it('should read fold once', () => {
    let paper = new OrigamiPaper([
      '6,10', '0,14', '9,10', '0,3', '10,4', '4,11', '6,0', '6,12',
      '4,1', '0,13', '10,12', '3,4', '3,0', '8,4', '1,10', '2,14',
      '8,10', '9,0', '', 'fold along y=7', 'fold along x=5']);

    paper.foldOver(paper.folds[0]);

    expect(paper.dots).toStrictEqual([
      { x: 6, y: 4 }, { x: 0, y: 0 }, { x: 9, y: 4 }, { x: 0, y: 3 },
      { x: 10, y: 4 }, { x: 4, y: 3 }, { x: 6, y: 0 }, { x: 6, y: 2 },
      { x: 4, y: 1 }, { x: 0, y: 1 }, { x: 10, y: 2 }, { x: 3, y: 4 },
      { x: 3, y: 0 }, { x: 8, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 0 },
      { x: 8, y: 4 }, { x: 9, y: 0 }
    ]);
    expect(paper.countDots()).toBe(17);
  });

  it('should solve part 1', () => {
    expect(solution.solvePart1()).toBe('759');
  });

  it('should solve part 2', () => {
    expect(solution.solvePart2()).toBe('HECRZKPR');
  });
});
