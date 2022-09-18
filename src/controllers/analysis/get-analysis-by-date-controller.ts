import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAnalysisByDate } from '../../use-cases/analysis/get-by-date/get-analysis-by-date'

export class GetAnalysisByDateController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { date } = request.query
    const getAnalysisByDate = container.resolve(GetAnalysisByDate)
    const analysis = await getAnalysisByDate.execute(String(date))
    return response.status(200).json(analysis)
  }
}
