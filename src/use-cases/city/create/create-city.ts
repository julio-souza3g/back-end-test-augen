import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { City } from '../../../entities/city'
import { ICityRepository } from '../../../repositories/city-repository-protocols'

interface CreateCityRequest {
  name: string
  ibgeCode: number
  uf: string
  region: string
}

type CreateCityResponse = City

@injectable()
export class CreateCity {
  constructor (
    @inject('CityRepository')
    private readonly cityRepository: ICityRepository
  ) {}

  async execute ({ name, ibgeCode, uf, region }: CreateCityRequest): Promise<CreateCityResponse> {
    const existsCity = await this.cityRepository.findByCode(ibgeCode)
    if (existsCity != null) {
      throw new Error('City already exists')
    }
    const city = new City({ name, ibgeCode, uf, region })
    const newCity = await this.cityRepository.create(city)
    return newCity
  }
}
