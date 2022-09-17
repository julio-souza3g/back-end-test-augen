import { inject, injectable } from 'tsyringe'
import { Equipment } from '../../../entities/equipment'
import { IEquipmentRepository } from '../../../repositories/equipment-repository-protocols'

@injectable()
export class GetEquipmentById {
  constructor (
    @inject('EquipmentRepository')
    private readonly equipmentRepository: IEquipmentRepository
  ) {}

  async execute (id: string): Promise<Equipment> {
    const equipment = await this.equipmentRepository.findById(id)
    if (equipment == null) {
      throw new Error('Equipment not found')
    }
    return equipment
  }
}
