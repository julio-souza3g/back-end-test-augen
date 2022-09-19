import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateAnalysis } from '../../use-cases/analysis/create/create-analysis'

export class CreateAnalysisController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { phLevel, chlorineLevel, fluorideLevel, flowRate, equipmentId } = request.body
      const createAnalysis = container.resolve(CreateAnalysis)
      const result = await createAnalysis.execute({ phLevel, chlorineLevel, fluorideLevel, flowRate, equipmentId })
      return response.status(201).json(result)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
