import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { IAnalysisRepository } from '../../../repositories/analysis-repository-protocols'

@injectable()
export class DeleteAnalysis {
  constructor (
    @inject('AnalysisRepository')
    private readonly analysisRepository: IAnalysisRepository
  ) {}

  async execute (id: string): Promise<void> {
    const analysis = await this.analysisRepository.findById(id)
    if (analysis === null) {
      throw new Error('Analysis not found')
    }
    await this.analysisRepository.delete(id)
  }
}
