import { Analysis } from '../../../entities/analysis'
import { InMemoryAnalysisRepository } from '../../../repositories/in-memory/in-memory-analysis-repository'
import { CreateAnalysis } from './create-analysis'

describe('CreateAnalysis', () => {
  it('should be able create an analysis', async () => {
    const inMemoryAnalysisRepository = new InMemoryAnalysisRepository()
    const createAnalysis = new CreateAnalysis(inMemoryAnalysisRepository)
    const analysis = await createAnalysis.execute({
      phLevel: 7.5,
      chlorineLevel: 0.5,
      fluorideLevel: 0.5,
      flowRate: 0.5,
      equipmentId: 'any_id'
    })
    expect(analysis).toBeInstanceOf(Analysis)
    expect(analysis.phLevel).toEqual(7.5)
  })
})
