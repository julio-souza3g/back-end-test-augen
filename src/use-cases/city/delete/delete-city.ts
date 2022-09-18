import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { ICityRepository } from '../../../repositories/city-repository-protocols'

@injectable()
export class DeleteCity {
  constructor (
    @inject('CityRepository')
    private readonly cityRepository: ICityRepository
  ) {}

  async execute (id: string): Promise<void> {
    const city = await this.cityRepository.findById(id)
    if (city == null) {
      throw new Error('City not found')
    }
    await this.cityRepository.delete(id)
  }
}
