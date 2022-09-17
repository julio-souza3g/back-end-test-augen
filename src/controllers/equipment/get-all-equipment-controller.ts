import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllEquipment } from '../../use-cases/equipment/get-all/get-all-equipment'

export class GetAllEquipmentController {
  async handle (request: Request, response: Response): Promise<Response> {
    const getAllEquipment = container.resolve(GetAllEquipment)
    const equipments = await getAllEquipment.execute()
    return response.status(200).json(equipments)
  }
}
