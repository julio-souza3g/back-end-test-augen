import 'reflect-metadata'
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
    const dateFrom = new Date().toISOString()
    const dateTo = new Date().toISOString()
    await expect(sut.execute(dateFrom, dateTo)).rejects.toThrow('No analysis found')
  })

  it('should be able get analysis by date', async () => {
    const { createAnalysis, sut } = makeSut()
    await createAnalysis.execute({
      phLevel: 7.5,
      chlorineLevel: 0.5,
      fluorideLevel: 0.5,
      flowRate: 0.5,
      equipmentId: 'any_id'
    })
    const dateFrom = new Date().toISOString()
    const dateTo = new Date().toISOString()
    const result = await sut.execute(dateFrom, dateTo)
    expect(result[0].id).toBeTruthy()
  })
})
