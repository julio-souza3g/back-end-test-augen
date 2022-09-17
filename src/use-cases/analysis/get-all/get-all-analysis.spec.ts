import { InMemoryAnalysisRepository } from '../../../repositories/in-memory/in-memory-analysis-repository'
import { CreateAnalysis } from '../create/create-analysis'
import { GetAllAnalysis } from './get-all-analysis'

interface SutTypes {
  createAnalysis: CreateAnalysis
  sut: GetAllAnalysis
}

const makeSut = (): SutTypes => {
  const inMemoryAnalysisRepository = new InMemoryAnalysisRepository()
  const createAnalysis = new CreateAnalysis(inMemoryAnalysisRepository)
  const sut = new GetAllAnalysis(inMemoryAnalysisRepository)
  return {
    createAnalysis,
    sut
  }
}

describe('GetAllAnalysis', () => {
  it('should be able get all analysis', async () => {
    const { createAnalysis, sut } = makeSut()
    await createAnalysis.execute({
      phLevel: 7.5,
      chlorineLevel: 0.5,
      fluorideLevel: 0.5,
      flowRate: 0.5,
      equipmentId: 'any_id'
    })
    const analysis = await sut.execute()
    expect(analysis).toBeInstanceOf(Array)
    expect(analysis.length).toBeGreaterThan(0)
  })
})
