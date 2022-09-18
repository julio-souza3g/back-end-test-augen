import 'reflect-metadata'
import { InMemoryCityRepository } from '../../../repositories/in-memory/in-memory-city-repository'
import { CreateCity } from '../create/create-city'
import { GetAllCity } from './get-all-city'

interface SutTypes {
  createCity: CreateCity
  sut: GetAllCity
}

const makeSut = (): SutTypes => {
  const inMemoryCityRepository = new InMemoryCityRepository()
  const createCity = new CreateCity(inMemoryCityRepository)
  const sut = new GetAllCity(inMemoryCityRepository)
  return {
    createCity,
    sut
  }
}
describe('GetAllCity', () => {
  it('should be able get all cities', async () => {
    const { createCity, sut } = makeSut()
    await createCity.execute({
      name: 'São Paulo',
      ibgeCode: 3550308,
      uf: 'SP',
      region: 'Sudeste'
    })
    await createCity.execute({
      name: 'Rio de Janeiro',
      ibgeCode: 3304557,
      uf: 'RJ',
      region: 'Sudeste'
    })
    const cities = await sut.execute()
    expect(cities).toBeInstanceOf(Array)
    expect(cities.length).toBeGreaterThanOrEqual(2)
  })
})
