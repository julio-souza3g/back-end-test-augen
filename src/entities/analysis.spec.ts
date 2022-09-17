import { Analysis } from './analysis'

describe('Analysis', () => {
  it('should be able create an analysis', () => {
    const analysis = new Analysis({
      phLevel: 7.5,
      chlorineLevel: 0.5,
      fluorideLevel: 0.5,
      flowRate: 0.5,
      equipmentId: 'any_id'
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
        flowRate: 0,
        equipmentId: 'any_id'
      })
    }).toThrow()
  })

  it('should not be able create an analysis with chlorine level to greater than 100', () => {
    expect(() => {
      return new Analysis({
        phLevel: 7.5,
        chlorineLevel: 101,
        fluorideLevel: 0.5,
        flowRate: 0.5,
        equipmentId: 'any_id'
      })
    }).toThrow()
  })

  it('should not be able create an analysis with fluoride level to greater than 100', () => {
    expect(() => {
      return new Analysis({
        phLevel: 7.5,
        chlorineLevel: 0.5,
        fluorideLevel: 101,
        flowRate: 0.5,
        equipmentId: 'any_id'
      })
    }).toThrow()
  })
})
