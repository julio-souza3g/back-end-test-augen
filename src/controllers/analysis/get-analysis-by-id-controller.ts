import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAnalysisById } from '../../use-cases/analysis/get-by-id/get-analysis-by-id'

export class GetAnalysisByIdController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const getAnalysisById = container.resolve(GetAnalysisById)
    const result = await getAnalysisById.execute(id)
    return response.status(200).json(result)
  }
}
