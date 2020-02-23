import formatMoney from '../lib/formatMoney';

describe('formatMoney function',()=>{
  it.skip('works with fractional dollars',()=>{
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(10)).toEqual('$0.10');
  });

  it.skip('leaves cents of for whole dollars',()=>{
    expect(formatMoney(5000)).toEqual('$50');
  });

  it.skip('works with whole and fractional dollars',()=>{
    expect(formatMoney(5012)).toEqual('$50.12');
  })
})
