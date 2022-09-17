import { Equipment } from '../../../entities/equipment'
import { IEquipmentRepository } from '../../../repositories/equipment-repository-protocols'
import { inject, injectable } from 'tsyringe'

interface CreateEquipmentRequest {
  name: string
  description: string
  cityId: string
}

type CreateEquipmentResponse = Equipment

@injectable()
export class CreateEquipment {
  constructor (
    @inject('EquipmentRepository')
    private readonly equipmentRepository: IEquipmentRepository
  ) {}

  async execute ({
    name,
    description,
    cityId
  }: CreateEquipmentRequest): Promise<CreateEquipmentResponse> {
    const equipment = new Equipment({
      name,
      description,
      cityId
    })
    await this.equipmentRepository.create(equipment)
    return equipment
  }
}
