import { Equipment } from '../../../entities/equipment'
import { IEquipmentRepository } from '../../../repositories/equipment-repository-protocols'

export class GetAllEquipment {
  constructor (private readonly equipmentRepository: IEquipmentRepository) {}

  async execute (): Promise<Equipment[]> {
    return await this.equipmentRepository.findAll()
  }
}
