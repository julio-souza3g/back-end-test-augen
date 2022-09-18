import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { City } from '../../../entities/city'
import { ICityRepository } from '../../../repositories/city-repository-protocols'

@injectable()
export class GetAllCity {
  constructor (
    @inject('CityRepository')
    private readonly cityRepository: ICityRepository
  ) {}

  async execute (): Promise<City[]> {
    return await this.cityRepository.findAll()
  }
}
