import 'reflect-metadata'
import { InMemoryCityRepository } from '../../../repositories/in-memory/in-memory-city-repository'
import { CreateCity } from '../create/create-city'
import { GetCityByName } from './get-city-by-name'

interface SutTypes {
  createCity: CreateCity
  sut: GetCityByName
}

const makeSut = (): SutTypes => {
  const inMemoryCityRepository = new InMemoryCityRepository()
  const createCity = new CreateCity(inMemoryCityRepository)
  const sut = new GetCityByName(inMemoryCityRepository)
  return {
    createCity,
    sut
  }
}

describe('GetCityByName', () => {
  it('should get a city by name', async () => {
    const { createCity, sut } = makeSut()
    await createCity.execute({
      name: 'São Paulo',
      ibgeCode: 3550308,
      uf: 'SP',
      region: 'Sudeste'
    })
    const city = await sut.execute('São Paulo')
    expect(city).toBeInstanceOf(Array)
    expect(city.length).toBeGreaterThanOrEqual(1)
  })
})
