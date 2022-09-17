import { inject, injectable } from 'tsyringe'
import { Equipment } from '../../../entities/equipment'
import { IEquipmentRepository } from '../../../repositories/equipment-repository-protocols'

@injectable()
export class GetAllEquipment {
  constructor (
    @inject('EquipmentRepository')
    private readonly equipmentRepository: IEquipmentRepository
  ) {}

  async execute (): Promise<Equipment[]> {
    return await this.equipmentRepository.findAll()
  }
}
