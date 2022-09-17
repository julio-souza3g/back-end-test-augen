import { Equipment } from '../../../entities/equipment'
import { IEquipmentRepository } from '../../../repositories/equipment-repository-protocols'

export class GetEquipmentById {
  constructor (private readonly equipmentRepository: IEquipmentRepository) {}

  async execute (id: string): Promise<Equipment> {
    const equipment = await this.equipmentRepository.findById(id)
    if (equipment == null) {
      throw new Error('Equipment not found')
    }
    return equipment
  }
}
