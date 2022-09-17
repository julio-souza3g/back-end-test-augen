import { Equipment } from '../../entities/equipment'
import { IEquipmentRepository } from '../equipment-repository-protocols'
import { prisma } from '../../database/prisma-client'

export class EquipmentRepository implements IEquipmentRepository {
  async create (equipment: Equipment): Promise<Equipment> {
    const newEquipment = await prisma.equipment.create({
      data: {
        name: equipment.name,
        description: equipment.description,
        cityId: equipment.cityId
      }
    })
    return newEquipment
  }

  async findAll (): Promise<Equipment[]> {
    const equipments = await prisma.equipment.findMany()
    return equipments
  }

  async findById (id: string): Promise<Equipment | null> {
    const equipment = await prisma.equipment.findUnique({
      where: {
        id
      }
    })
    return equipment
  }

  async update (equipment: Equipment): Promise<void> {
    await prisma.equipment.update({
      where: {
        id: equipment.id
      },
      data: {
        name: equipment.name,
        description: equipment.description,
        cityId: equipment.cityId
      }
    })
  }

  async delete (id: string): Promise<void> {
    await prisma.equipment.delete({
      where: {
        id
      }
    })
  }
}
