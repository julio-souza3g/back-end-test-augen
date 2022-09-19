import { City } from '../../entities/city'
import { ICityRepository } from '../city-repository-protocols'
import { prisma } from '../../database/prisma-client'

export class CityRepository implements ICityRepository {
  async create (city: City): Promise<City> {
    const newCity = await prisma.city.create({
      data: {
        id: city.id,
        name: city.name,
        ibgeCode: city.ibgeCode,
        uf: city.uf,
        region: city.region,
        createdAt: city.createdAt
      }
    })
    return newCity
  }

  async findAll (): Promise<City[]> {
    const cities = await prisma.city.findMany()
    return cities
  }

  async findById (id: string): Promise<City | null> {
    const city = await prisma.city.findUnique({
      where: {
        id
      }
    })
    return city
  }

  async findByCode (code: number): Promise<City | null> {
    const city = await prisma.city.findUnique({
      where: {
        ibgeCode: code
      }
    })
    return city
  }

  async findByName (name: string): Promise<City[]> {
    const cities = await prisma.city.findMany({
      where: {
        name: {
          contains: name
        }
      }
    })
    return cities
  }

  async delete (id: string): Promise<void> {
    await prisma.city.delete({
      where: {
        id
      }
    })
  }
}
