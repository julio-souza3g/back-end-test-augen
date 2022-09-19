import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllCity } from '../../use-cases/city/get-all/get-all-city'

export class GetAllCityController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const getAllCity = container.resolve(GetAllCity)
      const cities = await getAllCity.execute()
      return response.status(200).json(cities)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
