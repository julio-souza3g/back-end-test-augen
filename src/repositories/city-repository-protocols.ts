import { City } from '../entities/city'

export interface ICityRepository {
  create: (city: City) => Promise<City>
  findAll: () => Promise<City[]>
  findById: (id: string) => Promise<City | null>
  findByCode: (code: number) => Promise<City | null>
  findByName: (name: string) => Promise<City[]>
  delete: (id: string) => Promise<void>
}
