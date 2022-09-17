import { Analysis } from '../../../entities/analysis'
import { AnalysisRepository } from '../../../repositories/analysis-repository'

export class GetAllAnalysis {
  constructor (
    private readonly analysisRepository: AnalysisRepository
  ) {}

  async execute (): Promise<Analysis[]> {
    return await this.analysisRepository.findAll()
  }
}
