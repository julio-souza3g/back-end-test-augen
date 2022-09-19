import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCity } from '../../use-cases/city/create/create-city'

export class CreateCityController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { name, ibgeCode, uf, region } = request.body
      const createCity = container.resolve(CreateCity)
      const result = await createCity.execute({ name, ibgeCode, uf, region })
      return response.status(201).json(result)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
