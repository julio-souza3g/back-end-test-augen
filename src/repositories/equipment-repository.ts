import { Equipment } from '../entities/equipment'

export interface EquipmentRepository {
  create: (equipment: Equipment) => Promise<void>
  findAll: () => Promise<Equipment[]>
  findById: (id: string) => Promise<Equipment | null>
  update: (equipment: Equipment) => Promise<void>
  delete: (id: string) => Promise<void>
}
