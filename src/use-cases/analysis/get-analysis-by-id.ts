import { Analysis } from '../../entities/analysis'
import { AnalysisRepository } from '../../repositories/analysis-repository'

export class GetAnalysisById {
  constructor (
    private readonly analysisRepository: AnalysisRepository
  ) {}

  async execute (id: string): Promise<Analysis> {
    const analysis = await this.analysisRepository.findById(id)
    if (analysis === null) {
      throw new Error('Analysis not found')
    }
    return analysis
  }
}
