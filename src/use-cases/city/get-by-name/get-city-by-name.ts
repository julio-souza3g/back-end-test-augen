import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { City } from '../../../entities/city'
import { ICityRepository } from '../../../repositories/city-repository-protocols'

@injectable()
export class GetCityByName {
  constructor (
    @inject('CityRepository')
    private readonly cityRepository: ICityRepository
  ) {}

  async execute (name: string): Promise<City[]> {
    return await this.cityRepository.findByName(name)
  }
}
