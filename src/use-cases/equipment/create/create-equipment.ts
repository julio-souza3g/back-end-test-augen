import { Equipment } from '../../../entities/equipment'
import { IEquipmentRepository } from '../../../repositories/equipment-repository-protocols'

interface CreateEquipmentRequest {
  name: string
  description: string
  cityId: string
}

type CreateEquipmentResponse = Equipment

export class CreateEquipment {
  constructor (
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
