import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { Analysis } from '../../../entities/analysis'
import { IAnalysisRepository } from '../../../repositories/analysis-repository-protocols'

@injectable()
export class GetAllAnalysis {
  constructor (
    @inject('AnalysisRepository')
    private readonly analysisRepository: IAnalysisRepository
  ) {}

  async execute (): Promise<Analysis[]> {
    return await this.analysisRepository.findAll()
  }
}
