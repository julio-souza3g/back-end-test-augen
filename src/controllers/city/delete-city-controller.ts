import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteCity } from '../../use-cases/city/delete/delete-city'

export class DeleteCityController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const deleteCity = container.resolve(DeleteCity)
      await deleteCity.execute(id)
      return response.status(204).send()
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
