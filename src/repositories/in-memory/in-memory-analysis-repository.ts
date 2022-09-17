import { Analysis } from '../../entities/analysis'
import { AnalysisRepository } from '../analysis-repository'

export class InMemoryAnalysisRepository implements AnalysisRepository {
  private readonly analyses: Analysis[] = []

  async create (analysis: Analysis): Promise<void> {
    this.analyses.push(analysis)
  }

  async findAll (): Promise<Analysis[]> {
    return this.analyses
  }

  async findById (id: string): Promise<Analysis | null> {
    const analysis = this.analyses.find(analysis => analysis.id === id)
    return (analysis != null) ? analysis : null
  }

  async findByDate (date: Date): Promise<Analysis | null> {
    const analysis = this.analyses.find(analysis => analysis.createdAt === date)
    return (analysis != null) ? analysis : null
  }

  async delete (id: string): Promise<void> {
    const analysis = await this.findById(id)
    if (analysis != null) {
      this.analyses.splice(this.analyses.indexOf(analysis), 1)
    }
  }
}
