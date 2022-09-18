import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteAnalysis } from '../../use-cases/analysis/delete/delete-analysis'

export class DeleteAnalysisController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const deleteAnalysis = container.resolve(DeleteAnalysis)
    await deleteAnalysis.execute(id)
    return response.status(204).send()
  }
}
