import { City } from '../../entities/city'
import { ICityRepository } from '../city-repository-protocols'

export class InMemoryCityRepository implements ICityRepository {
  private readonly cities: City[] = []

  async create (city: City): Promise<City> {
    this.cities.push(city)
    return city
  }

  async findAll (): Promise<City[]> {
    return this.cities
  }

  async findById (id: string): Promise<City | null> {
    const city = this.cities.find(city => city.id === id)
    if (city == null) {
      return null
    }
    return city
  }

  async findByCode (code: number): Promise<City | null> {
    const city = this.cities.find(city => city.ibgeCode === code)
    if (city == null) {
      return null
    }
    return city
  }

  async findByName (name: string): Promise<City[]> {
    return this.cities.filter(city => city.name.includes(name))
  }

  async delete (id: string): Promise<void> {
    const cityIndex = this.cities.findIndex(city => city.id === id)
    this.cities.splice(cityIndex, 1)
  }
}
