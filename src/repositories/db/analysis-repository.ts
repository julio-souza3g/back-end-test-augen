import { Analysis } from '../../entities/analysis'
import { IAnalysisRepository } from '../analysis-repository-protocols'
import { prisma } from '../../database/prisma-client'

export class AnalysisRepository implements IAnalysisRepository {
  async create (analysis: Analysis): Promise<Analysis> {
    const newAnalysis = await prisma.analysis.create({
      data: {
        id: analysis.id,
        phLevel: analysis.phLevel,
        chlorineLevel: analysis.chlorineLevel,
        fluorideLevel: analysis.fluorideLevel,
        flowRate: analysis.flowRate,
        createdAt: analysis.createdAt,
        equipment: {
          connect: {
            id: analysis.equipmentId
          }
        }
      }
    })
    return newAnalysis
  }

  async findAll (): Promise<Analysis[]> {
    const analyses = await prisma.analysis.findMany()
    return analyses
  }

  async findById (id: string): Promise<Analysis | null> {
    const analysis = await prisma.analysis.findUnique({
      where: { id }
    })
    return analysis
  }

  async findByDate (date: Date): Promise<Analysis[]> {
    const analyses = await prisma.analysis.findMany({
      where: { createdAt: date }
    })
    return analyses
  }

  async delete (id: string): Promise<void> {
    await prisma.analysis.delete({
      where: { id }
    })
  }
}
