import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetCityByName } from '../../use-cases/city/get-by-name/get-city-by-name'

export class GetCityByNameController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.query
      const getCityByName = container.resolve(GetCityByName)
      const result = await getCityByName.execute(String(name))
      return response.status(200).json(result)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
