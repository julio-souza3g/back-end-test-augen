import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { Analysis } from '../../../entities/analysis'
import { IAnalysisRepository } from '../../../repositories/analysis-repository-protocols'

@injectable()
export class GetAnalysisByDate {
  constructor (
    @inject('AnalysisRepository')
    private readonly analysisRepository: IAnalysisRepository
  ) {}

  async execute (from: string, to: string): Promise<Analysis[]> {
    const dateFrom = new Date(from)
    const dateTo = new Date(to)
    dateTo.setUTCHours(23, 59, 59, 999)
    const analyses = await this.analysisRepository.findByDate(dateFrom, dateTo)
    if (analyses.length === 0) {
      throw new Error('No analysis found')
    }
    return analyses
  }
}
