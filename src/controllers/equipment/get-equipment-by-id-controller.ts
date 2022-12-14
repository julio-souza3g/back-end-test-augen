import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetEquipmentById } from '../../use-cases/equipment/get-by-id/get-equipment-by-id'

export class GetEquipmentByIdController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const getEquipmentById = container.resolve(GetEquipmentById)
      const result = await getEquipmentById.execute(id)
      return response.status(200).json(result)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
