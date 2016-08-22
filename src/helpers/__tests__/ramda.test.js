import R from 'ramda';

describe('@ramda', () => {
  it('add, dec, divide, inc and compose usage', () => {
    const calc = R.compose(
      R.divide(R.__, 2),
      R.add(3),
      R.add(2),
      R.dec,
      R.inc,
      R.multiply(R.__, 10)
    );
    expect(calc(2)).to.equal((2 * 10 + 1 - 1 + 2 + 3) / 2);
  });

  it('sum', () => {
    const calc = R.compose(
      R.sum
    );
    expect(calc([1, 2, 3, 4])).to.equal(1 + 2 + 3 + 4);
  });

  it('adjust - apply function to the value at the given index of array', () => {
    const list = [0, 0, 0, 0, 0];
    const calc = R.compose(
      R.sum,
      R.adjust(R.add(10), 1),
      R.adjust(R.add(10), 3)
    );
    expect(calc(list)).to.equal(0 + 10 + 0 + 10 + 0);
  });

  it('all - return true if all elements in array is true', () => {
    const list = [10, 20, 30, 40, 50];
    const gte5 = R.flip(R.gte)(5);
    const calc = R.all(gte5);
    expect(calc(list)).to.equal(true);
    expect(calc(R.append(3)(list))).to.equal(false);
  });
  it('all - return true if all elements in object is true', () => {
    const list = { a: 10, b: 20, c: 30, d: 40, e: 50 };
    const gte5 = R.flip(R.gte)(5);
    const calc = R.all(gte5);
    expect(calc(list)).to.equal(true);
    expect(calc(R.append(3)(list))).to.equal(false);
  });
});
