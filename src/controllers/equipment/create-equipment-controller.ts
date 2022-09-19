import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateEquipment } from '../../use-cases/equipment/create/create-equipment'

export class CreateEquipmentController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { name, description, cityId } = request.body
      const createEquipment = container.resolve(CreateEquipment)
      const result = await createEquipment.execute({ name, description, cityId })
      return response.status(201).json(result)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
