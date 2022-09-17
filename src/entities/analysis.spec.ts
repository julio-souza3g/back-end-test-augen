import { Analysis } from './analysis'

describe('Analysis', () => {
  it('should be able create an analysis', () => {
    const analysis = new Analysis({
      phLevel: 7.5,
      chlorineLevel: 0.5,
      fluorideLevel: 0.5,
      flowRate: 0.5
    })

    expect(analysis).toBeInstanceOf(Analysis)
    expect(analysis.phLevel).toEqual(7.5)
  })

  it('should not be able create an analysis with flow rate to equal zero', () => {
    expect(() => {
      return new Analysis({
        phLevel: 7.5,
        chlorineLevel: 0.5,
        fluorideLevel: 0.5,
        flowRate: 0
      })
    }).toThrow()
  })

  it('should not be able create an analysis with chlorine level to greater than 100', () => {
    expect(() => {
      return new Analysis({
        phLevel: 7.5,
        chlorineLevel: 101,
        fluorideLevel: 0.5,
        flowRate: 0.5
      })
    }).toThrow()
  })

  it('should not be able create an analysis with fluoride level to greater than 100', () => {
    expect(() => {
      return new Analysis({
        phLevel: 7.5,
        chlorineLevel: 0.5,
        fluorideLevel: 101,
        flowRate: 0.5
      })
    }).toThrow()
  })
})
