import { Equipment } from '../../entities/equipment'
import { IEquipmentRepository } from '../equipment-repository-protocols'

export class InMemoryEquipmentRepository implements IEquipmentRepository {
  private readonly equipments: Equipment[] = []

  async create (equipment: Equipment): Promise<Equipment> {
    this.equipments.push(equipment)
    return equipment
  }

  async findAll (): Promise<Equipment[]> {
    return this.equipments
  }

  async findById (id: string): Promise<Equipment | null> {
    const equipment = this.equipments.find(equipment => equipment.id === id)
    return (equipment != null) ? equipment : null
  }

  async update (equipment: Equipment): Promise<void> {
    const oldEquipment = await this.findById(equipment.id)
    if (oldEquipment != null) {
      this.equipments.splice(this.equipments.indexOf(oldEquipment), 1, equipment)
    }
  }

  async delete (id: string): Promise<void> {
    const equipment = await this.findById(id)
    if (equipment != null) {
      this.equipments.splice(this.equipments.indexOf(equipment), 1)
    }
  }
}
