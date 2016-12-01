const expect = require('chai').use(require('dirty-chai')).expect;
const pk6parse = require('../..');
const abra_expected = require('./abra_expected');
const options = {gen: 7, parseNames: true};

describe('gen 7', () => {
  it('works with pre gen 7 pokemon', () => {
    const abra_actual = pk6parse.parseFile(`${__dirname}/abra.pk7`, options);
    expect(abra_actual).to.eql(abra_expected);
  });

  it('contains old tid and sid', () => {
    const abra_actual = pk6parse.parseFile(`${__dirname}/abra.pk7`, options);
    expect(abra_actual.tid).to.eql(14562);
    expect(abra_actual.sid).to.eql(39364);
  });

  it('contains tidFull', () => {
    const abra_actual = pk6parse.parseFile(`${__dirname}/abra.pk7`, options);
    expect(abra_actual.tidFull).to.eql(2579773666);
  });

  it('contains 6 digit idNo', () => {
    const abra_actual = pk6parse.parseFile(`${__dirname}/abra.pk7`, options);
    expect(abra_actual.idNo).to.eql(773666);
  });

  it.skip('contains 5 digit idNo for pokemon caught before gen 7', () => {
    // TODO: untestable until bank comes out (but test added so we don't forget)
    const gen6_actual = pk6parse.parseFile(`${__dirname}/gen6.pk7`, options);
    expect(gen6_actual.idNo).to.eql(12345);
  });
});
