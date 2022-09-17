import { Equipment } from '../../../entities/equipment'
import { EquipmentRepository } from '../../../repositories/equipment-repository'

interface CreateEquipmentRequest {
  name: string
  description: string
  cityId: string
}

type CreateEquipmentResponse = Equipment

export class CreateEquipment {
  constructor (
    private readonly equipmentRepository: EquipmentRepository
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
