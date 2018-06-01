import paramGrid from '..';

describe('test myModule', () => {
  it('should return 42', () => {
    expect([
      ...paramGrid({
        a: [1, 2],
        b: ['a', 'b', 'c'],
        c: [{ x: 1 }, { x: 2 }],
        d: true
      })
    ]).toEqual([
      {
        a: 1,
        b: 'a',
        c: { x: 1 },
        d: true
      },
      {
        a: 1,
        b: 'a',
        c: { x: 2 },
        d: true
      },
      {
        a: 1,
        b: 'b',
        c: { x: 1 },
        d: true
      },
      {
        a: 1,
        b: 'b',
        c: { x: 2 },
        d: true
      },
      {
        a: 1,
        b: 'c',
        c: { x: 1 },
        d: true
      },
      {
        a: 1,
        b: 'c',
        c: { x: 2 },
        d: true
      },
      {
        a: 2,
        b: 'a',
        c: { x: 1 },
        d: true
      },
      {
        a: 2,
        b: 'a',
        c: { x: 2 },
        d: true
      },
      {
        a: 2,
        b: 'b',
        c: { x: 1 },
        d: true
      },
      {
        a: 2,
        b: 'b',
        c: { x: 2 },
        d: true
      },
      {
        a: 2,
        b: 'c',
        c: { x: 1 },
        d: true
      },
      {
        a: 2,
        b: 'c',
        c: { x: 2 },
        d: true
      }
    ]);
  });
});
