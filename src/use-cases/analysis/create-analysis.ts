import { Analysis } from '../../entities/analysis'
import { AnalysisRepository } from '../../repositories/analysis-repository'

interface CreateAnalysisRequest {
  phLevel: number
  chlorineLevel: number
  fluorideLevel: number
  flowRate: number
}
type CreateAnalysisResponse = Analysis

export class CreateAnalysis {
  constructor (
    private readonly analysisRepository: AnalysisRepository
  ) {}

  async execute ({
    phLevel,
    chlorineLevel,
    fluorideLevel,
    flowRate
  }: CreateAnalysisRequest): Promise<CreateAnalysisResponse> {
    const analysis = new Analysis({ phLevel, chlorineLevel, fluorideLevel, flowRate })
    await this.analysisRepository.create(analysis)
    return analysis
  }
}
