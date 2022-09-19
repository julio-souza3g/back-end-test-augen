import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllEquipment } from '../../use-cases/equipment/get-all/get-all-equipment'

export class GetAllEquipmentController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const getAllEquipment = container.resolve(GetAllEquipment)
      const equipments = await getAllEquipment.execute()
      return response.status(200).json(equipments)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
