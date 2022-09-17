import { Analysis } from '../../../entities/analysis'
import { IAnalysisRepository } from '../../../repositories/analysis-repository-protocols'

export class GetAnalysisByDate {
  constructor (private readonly analysisRepository: IAnalysisRepository) {}

  async execute (date: Date): Promise<Analysis[]> {
    const analyses = await this.analysisRepository.findByDate(date)
    if (analyses?.length === 0) {
      throw new Error('Analyses not found')
    }
    return analyses
  }
}
