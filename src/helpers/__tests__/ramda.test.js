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
});
