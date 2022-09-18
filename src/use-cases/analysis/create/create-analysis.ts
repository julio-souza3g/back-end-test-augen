import { inject, injectable } from 'tsyringe'
import { Analysis } from '../../../entities/analysis'
import { IAnalysisRepository } from '../../../repositories/analysis-repository-protocols'

interface CreateAnalysisRequest {
  phLevel: number
  chlorineLevel: number
  fluorideLevel: number
  flowRate: number
  equipmentId: string
}
type CreateAnalysisResponse = Analysis

@injectable()
export class CreateAnalysis {
  constructor (
    @inject('AnalysisRepository')
    private readonly analysisRepository: IAnalysisRepository
  ) {}

  async execute ({
    phLevel,
    chlorineLevel,
    fluorideLevel,
    flowRate,
    equipmentId
  }: CreateAnalysisRequest): Promise<CreateAnalysisResponse> {
    const analysis = new Analysis({ phLevel, chlorineLevel, fluorideLevel, flowRate, equipmentId })
    await this.analysisRepository.create(analysis)
    return analysis
  }
}
