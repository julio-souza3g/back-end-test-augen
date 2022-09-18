import 'reflect-metadata'
import { Analysis } from '../../../entities/analysis'
import { InMemoryAnalysisRepository } from '../../../repositories/in-memory/in-memory-analysis-repository'
import { CreateAnalysis } from '../create/create-analysis'
import { GetAnalysisById } from './get-analysis-by-id'

interface SutTypes {
  createAnalysis: CreateAnalysis
  sut: GetAnalysisById
}

const makeSut = (): SutTypes => {
  const inMemoryAnalysisRepository = new InMemoryAnalysisRepository()
  const createAnalysis = new CreateAnalysis(inMemoryAnalysisRepository)
  const sut = new GetAnalysisById(inMemoryAnalysisRepository)
  return {
    createAnalysis,
    sut
  }
}

describe('GetAnalysisById', () => {
  it('should be able get an analysis by id', async () => {
    const { createAnalysis, sut } = makeSut()
    const analysis = await createAnalysis.execute({
      phLevel: 7.5,
      chlorineLevel: 0.5,
      fluorideLevel: 0.5,
      flowRate: 0.5,
      equipmentId: 'any_id'
    })
    const analysisById = await sut.execute(analysis.id)
    expect(analysisById).toBeInstanceOf(Analysis)
    expect(analysisById.id).toEqual(analysis.id)
  })

  it('should be able throw if analysis not found', async () => {
    const { sut } = makeSut()
    await expect(sut.execute('invalid_id')).rejects.toThrow()
  })
})
