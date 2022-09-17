import { AnalysisRepository } from '../../../repositories/analysis-repository'

export class DeleteAnalysis {
  constructor (
    private readonly analysisRepository: AnalysisRepository
  ) {}

  async execute (id: string): Promise<void> {
    const analysis = await this.analysisRepository.findById(id)
    if (analysis === null) {
      throw new Error('Analysis not found')
    }
    await this.analysisRepository.delete(id)
  }
}
