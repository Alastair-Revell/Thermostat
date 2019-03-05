describe('thermostat', function() {
  it('should have a default temperature of 20 degrees', function() {
    var thermostat = new Thermostat
    expect(thermostat.temperature).toEqual(20)
  })
})

  it('Up should increase temerature of thermostat', function() {
    var thermostat = new Thermostat
    thermostat.hotter()
    expect(thermostat.temperature).not.toBeLessThan(20)
  })

  it('Down should decrese temerature of thermostat', function() {
    var thermostat = new Thermostat
    thermostat.cooler()
    expect(thermostat.temperature).toBeLessThan(20)
  })

  it('The thermostat shold have a minimum temp. of 10 degrees', function() {
    var thermostat = new Thermostat
    thermostat.cooler(10)
    expect(() => {thermostat.cooler()}).toThrow()
  })

  it('If power-saving mode is on, max temp is 25', function() {
    var thermostat = new Thermostat
    thermostat.hotter(5)
    expect(() => {thermostat.hotter()}).toThrow()
  })

  it('If power-saving mode is off, max temp is 32', function() {
    var thermostat = new Thermostat
    thermostat.hotter(12)
    expect(() => {thermostat.hotter()}).toThrow()
  })
