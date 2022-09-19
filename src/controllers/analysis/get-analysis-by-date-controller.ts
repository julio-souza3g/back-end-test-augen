import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAnalysisByDate } from '../../use-cases/analysis/get-by-date/get-analysis-by-date'

export class GetAnalysisByDateController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { startDate, endDate } = request.body
      const getAnalysisByDate = container.resolve(GetAnalysisByDate)
      const analysis = await getAnalysisByDate.execute(startDate, endDate)
      return response.status(200).json(analysis)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
