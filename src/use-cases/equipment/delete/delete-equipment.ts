import { IEquipmentRepository } from '../../../repositories/equipment-repository-protocols'

export class DeleteEquipment {
  constructor (private readonly equipmentRepository: IEquipmentRepository) {}

  async execute (id: string): Promise<void> {
    const equipment = await this.equipmentRepository.findById(id)
    if (equipment == null) {
      throw new Error('Equipment not found')
    }
    await this.equipmentRepository.delete(id)
  }
}
