import { Equipment } from '../../../entities/equipment'
import { EquipmentRepository } from '../../../repositories/equipment-repository'

export class GetAllEquipment {
  constructor (private readonly equipmentRepository: EquipmentRepository) {}

  async execute (): Promise<Equipment[]> {
    return await this.equipmentRepository.findAll()
  }
}
