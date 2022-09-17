import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateEquipment } from '../../use-cases/equipment/update/update-equipment'

export class UpdateEquipmentController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, description } = request.body
    const updateEquipment = container.resolve(UpdateEquipment)
    const result = await updateEquipment.execute(id, { name, description })
    return response.status(200).json(result)
  }
}
