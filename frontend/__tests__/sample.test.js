describe('Sample test 101',()=>{
  it.skip('works as expected',()=>{
    const age =100;
    expect(1).toEqual(1);
    expect(age).toEqual(100);
  })

  it.skip('handle ranges just fine',()=>{
    const age = 200;
    expect(age).toBeGreaterThan(100);
  })

  it.skip('makes a list of dogs name',()=>{
    const dogs=['snickers', 'hugo'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('snickers')
  })
});
