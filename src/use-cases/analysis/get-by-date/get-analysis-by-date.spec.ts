import { InMemoryAnalysisRepository } from '../../../repositories/in-memory/in-memory-analysis-repository'
import { CreateAnalysis } from '../create/create-analysis'
import { GetAnalysisByDate } from './get-analysis-by-date'

interface SutTypes {
  createAnalysis: CreateAnalysis
  sut: GetAnalysisByDate
}

const makeSut = (): SutTypes => {
  const inMemoryAnalysisRepository = new InMemoryAnalysisRepository()
  const createAnalysis = new CreateAnalysis(inMemoryAnalysisRepository)
  const sut = new GetAnalysisByDate(inMemoryAnalysisRepository)
  return {
    createAnalysis,
    sut
  }
}

describe('GetAnalysisByDate', () => {
  it('should throw if analysis does not exist', async () => {
    const { sut } = makeSut()
    await expect(sut.execute(new Date())).rejects.toThrow('Analysis not found')
  })

  it('should be able get analysis by date', async () => {
    const { createAnalysis, sut } = makeSut()
    const analysis = await createAnalysis.execute({
      phLevel: 7.5,
      chlorineLevel: 0.5,
      fluorideLevel: 0.5,
      flowRate: 0.5
    })
    const result = await sut.execute(analysis.createdAt)
    expect(result).toEqual(analysis)
  })
})
