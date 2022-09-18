import 'reflect-metadata'
import { InMemoryAnalysisRepository } from '../../../repositories/in-memory/in-memory-analysis-repository'
import { CreateAnalysis } from '../create/create-analysis'
import { GetAnalysisById } from '../get-by-id/get-analysis-by-id'
import { DeleteAnalysis } from './delete-analysis'

interface SutTypes {
  createAnalysis: CreateAnalysis
  getAnalysisById: GetAnalysisById
  sut: DeleteAnalysis
}

const makeSut = (): SutTypes => {
  const inMemoryAnalysisRepository = new InMemoryAnalysisRepository()
  const createAnalysis = new CreateAnalysis(inMemoryAnalysisRepository)
  const getAnalysisById = new GetAnalysisById(inMemoryAnalysisRepository)
  const sut = new DeleteAnalysis(inMemoryAnalysisRepository)
  return {
    createAnalysis,
    getAnalysisById,
    sut
  }
}

describe('DeleteAnalysis', () => {
  it('should throw if analysis does not exist', async () => {
    const { sut } = makeSut()
    await expect(sut.execute('invalid-id')).rejects.toThrow('Analysis not found')
  })

  it('should be able delete analysis', async () => {
    const { createAnalysis, getAnalysisById, sut } = makeSut()
    const analysis = await createAnalysis.execute({
      phLevel: 7.5,
      chlorineLevel: 0.5,
      fluorideLevel: 0.5,
      flowRate: 0.5,
      equipmentId: 'any_id'
    })
    await sut.execute(analysis.id)
    await expect(getAnalysisById.execute(analysis.id)).rejects.toThrow()
  })
})
