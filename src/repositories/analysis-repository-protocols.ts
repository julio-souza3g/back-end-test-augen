import { Analysis } from '../entities/analysis'

export interface IAnalysisRepository {
  create: (analysis: Analysis) => Promise<Analysis>
  findAll: () => Promise<Analysis[]>
  findById: (id: string) => Promise<Analysis | null>
  findByDate: (from: Date, to: Date) => Promise<Analysis[]>
  delete: (id: string) => Promise<void>
}
