import { Analysis } from '../../../entities/analysis'
import { AnalysisRepository } from '../../../repositories/analysis-repository'

export class GetAnalysisByDate {
  constructor (private readonly analysisRepository: AnalysisRepository) {}

  async execute (date: Date): Promise<Analysis | null> {
    const analysis = await this.analysisRepository.findByDate(date)
    if (analysis == null) {
      throw new Error('Analysis not found')
    }
    return analysis
  }
}
