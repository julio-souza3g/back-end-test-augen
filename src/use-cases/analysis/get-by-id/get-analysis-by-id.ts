import { Analysis } from '../../../entities/analysis'
import { IAnalysisRepository } from '../../../repositories/analysis-repository-protocols'

export class GetAnalysisById {
  constructor (
    private readonly analysisRepository: IAnalysisRepository
  ) {}

  async execute (id: string): Promise<Analysis> {
    const analysis = await this.analysisRepository.findById(id)
    if (analysis === null) {
      throw new Error('Analysis not found')
    }
    return analysis
  }
}
