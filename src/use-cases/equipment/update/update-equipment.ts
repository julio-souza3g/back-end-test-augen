import { Equipment } from '../../../entities/equipment'
import { EquipmentRepository } from '../../../repositories/equipment-repository'

interface UpdateEquipmentRequest {
  name: string
  description: string
}

type UpdateEquipmentResponse = Equipment

export class UpdateEquipment {
  constructor (private readonly equipmentRepository: EquipmentRepository) {}

  async execute (
    id: string,
    { name, description }: UpdateEquipmentRequest
  ): Promise<UpdateEquipmentResponse> {
    const equipment = await this.equipmentRepository.findById(id)
    if (equipment == null) {
      throw new Error('Equipment not found')
    }
    equipment.name = name
    equipment.description = description
    await this.equipmentRepository.update(equipment)
    return equipment
  }
}
