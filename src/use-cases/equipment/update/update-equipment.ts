import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { Equipment } from '../../../entities/equipment'
import { IEquipmentRepository } from '../../../repositories/equipment-repository-protocols'

interface UpdateEquipmentRequest {
  name: string
  description: string
}

type UpdateEquipmentResponse = Equipment

@injectable()
export class UpdateEquipment {
  constructor (
    @inject('EquipmentRepository')
    private readonly equipmentRepository: IEquipmentRepository
  ) {}

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
