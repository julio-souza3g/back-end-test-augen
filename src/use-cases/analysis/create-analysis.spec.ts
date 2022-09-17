import { Analysis } from '../../entities/analysis'
import { CreateAnalysis } from './create-analysis'

describe('CreateAnalysis', () => {
  it('should be able create an analysis', async () => {
    const createAnalysis = new CreateAnalysis()
    const analysis = await createAnalysis.execute({
      phLevel: 7.5,
      chlorineLevel: 0.5,
      fluorideLevel: 0.5,
      flowRate: 0.5
    })
    expect(analysis).toBeInstanceOf(Analysis)
    expect(analysis.phLevel).toEqual(7.5)
  })
})
