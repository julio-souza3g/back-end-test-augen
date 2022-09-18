import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllAnalysis } from '../../use-cases/analysis/get-all/get-all-analysis'

export class GetAllAnalysisController {
  async handle (request: Request, response: Response): Promise<Response> {
    const getAllAnalysis = container.resolve(GetAllAnalysis)
    const analysis = await getAllAnalysis.execute()
    return response.status(200).json(analysis)
  }
}
