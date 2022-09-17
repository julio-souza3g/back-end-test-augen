import { Equipment } from '../../../entities/equipment'
import { EquipmentRepository } from '../../../repositories/equipment-repository'

export class GetEquipmentById {
  constructor (private readonly equipmentRepository: EquipmentRepository) {}

  async execute (id: string): Promise<Equipment> {
    const equipment = await this.equipmentRepository.findById(id)
    if (equipment == null) {
      throw new Error('Equipment not found')
    }
    return equipment
  }
}
