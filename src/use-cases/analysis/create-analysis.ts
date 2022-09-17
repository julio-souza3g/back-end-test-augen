import { Analysis } from '../../entities/analysis'

interface CreateAnalysisRequest {
  phLevel: number
  chlorineLevel: number
  fluorideLevel: number
  flowRate: number
}
type CreateAnalysisResponse = Analysis

export class CreateAnalysis {
  async execute ({
    phLevel,
    chlorineLevel,
    fluorideLevel,
    flowRate
  }: CreateAnalysisRequest): Promise<CreateAnalysisResponse> {
    const analysis = new Analysis({ phLevel, chlorineLevel, fluorideLevel, flowRate })
    return analysis
  }
}
