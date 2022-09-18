import { Analysis } from '../../entities/analysis'
import { IAnalysisRepository } from '../analysis-repository-protocols'
import { isEqual } from 'date-fns'

export class InMemoryAnalysisRepository implements IAnalysisRepository {
  private readonly analyses: Analysis[] = []

  async create (analysis: Analysis): Promise<Analysis> {
    this.analyses.push(analysis)
    return analysis
  }

  async findAll (): Promise<Analysis[]> {
    return this.analyses
  }

  async findById (id: string): Promise<Analysis | null> {
    const analysis = this.analyses.find((analysis) => analysis.id === id)
    return analysis != null ? analysis : null
  }

  async findByDate (date: Date): Promise<Analysis[]> {
    const analyses = this.analyses.filter((analysis) =>
      isEqual(analysis.createdAt, date)
    )
    return analyses
  }

  async delete (id: string): Promise<void> {
    const analysis = await this.findById(id)
    if (analysis != null) {
      this.analyses.splice(this.analyses.indexOf(analysis), 1)
    }
  }
}
