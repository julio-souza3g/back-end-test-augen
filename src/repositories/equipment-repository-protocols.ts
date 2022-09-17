import { Equipment } from '../entities/equipment'

export interface IEquipmentRepository {
  create: (equipment: Equipment) => Promise<Equipment>
  findAll: () => Promise<Equipment[]>
  findById: (id: string) => Promise<Equipment | null>
  update: (equipment: Equipment) => Promise<void>
  delete: (id: string) => Promise<void>
}
