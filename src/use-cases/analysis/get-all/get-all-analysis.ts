import { Analysis } from '../../../entities/analysis'
import { IAnalysisRepository } from '../../../repositories/analysis-repository-protocols'

export class GetAllAnalysis {
  constructor (
    private readonly analysisRepository: IAnalysisRepository
  ) {}

  async execute (): Promise<Analysis[]> {
    return await this.analysisRepository.findAll()
  }
}
