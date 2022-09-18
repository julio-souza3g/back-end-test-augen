import { InMemoryCityRepository } from '../../../repositories/in-memory/in-memory-city-repository'
import { CreateCity } from '../create/create-city'
import { DeleteCity } from './delete-city'

interface SutTypes {
  createCity: CreateCity
  sut: DeleteCity
}

const makeSut = (): SutTypes => {
  const inMemoryCityRepository = new InMemoryCityRepository()
  const createCity = new CreateCity(inMemoryCityRepository)
  const sut = new DeleteCity(inMemoryCityRepository)
  return {
    createCity,
    sut
  }
}

describe('DeleteCity', () => {
  it('should be able delete a city', async () => {
    const { createCity, sut } = makeSut()
    const city = await createCity.execute({
      name: 'São Paulo',
      ibgeCode: 3550308,
      uf: 'SP',
      region: 'Sudeste'
    })
    await sut.execute(city.id)
    await expect(sut.execute(city.id)).rejects.toThrow()
  })

  it('should be able throw if city not found', async () => {
    const { sut } = makeSut()
    await expect(sut.execute('invalid_id')).rejects.toThrow()
  })
})
