import { InMemoryCityRepository } from '../../../repositories/in-memory/in-memory-city-repository'
import { CreateCity } from './create-city'

interface SutTypes {
  sut: CreateCity
}

const makeSut = (): SutTypes => {
  const inMemoryCityRepository = new InMemoryCityRepository()
  const sut = new CreateCity(inMemoryCityRepository)
  return {
    sut
  }
}

describe('CreateCity', () => {
  it('should create a new city', async () => {
    const { sut } = makeSut()
    const city = await sut.execute({
      name: 'São Paulo',
      ibgeCode: 3550308,
      uf: 'SP',
      region: 'Sudeste'
    })
    expect(city.id).toBeTruthy()
  })

  it('should not create a new city if ibgeCode already exists', async () => {
    const { sut } = makeSut()
    await sut.execute({
      name: 'São Paulo',
      ibgeCode: 3550308,
      uf: 'SP',
      region: 'Sudeste'
    })
    await expect(sut.execute({
      name: 'São Paulo',
      ibgeCode: 3550308,
      uf: 'SP',
      region: 'Sudeste'
    })).rejects.toThrow()
  })
})
