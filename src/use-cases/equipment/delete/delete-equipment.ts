import { inject, injectable } from 'tsyringe'
import { IEquipmentRepository } from '../../../repositories/equipment-repository-protocols'

@injectable()
export class DeleteEquipment {
  constructor (
    @inject('EquipmentRepository')
    private readonly equipmentRepository: IEquipmentRepository
  ) {}

  async execute (id: string): Promise<void> {
    const equipment = await this.equipmentRepository.findById(id)
    if (equipment == null) {
      throw new Error('Equipment not found')
    }
    await this.equipmentRepository.delete(id)
  }
}
