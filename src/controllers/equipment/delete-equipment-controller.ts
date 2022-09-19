import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteEquipment } from '../../use-cases/equipment/delete/delete-equipment'

export class DeleteEquipmentController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const deleteEquipment = container.resolve(DeleteEquipment)
      await deleteEquipment.execute(id)
      return response.status(204).send()
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
