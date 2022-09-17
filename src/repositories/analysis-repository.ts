import { Analysis } from '../entities/analysis'

export interface AnalysisRepository {
  create: (analysis: Analysis) => Promise<void>
  findAll: () => Promise<Analysis[]>
  findById: (id: string) => Promise<Analysis | null>
  findByDate: (date: Date) => Promise<Analysis | null>
  delete: (id: string) => Promise<void>
}
