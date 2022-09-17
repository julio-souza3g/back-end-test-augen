import { InMemoryEquipmentRepository } from '../../../repositories/in-memory/in-memory-equipment-repository'
import { CreateEquipment } from './create-equipment'

interface SutTypes {
  sut: CreateEquipment
}

const makeSut = (): SutTypes => {
  const inMemoryEquipmentRepository = new InMemoryEquipmentRepository()
  const sut = new CreateEquipment(inMemoryEquipmentRepository)
  return {
    sut
  }
}

describe('CreateEquipment', () => {
  it('should create a new equipment', async () => {
    const { sut } = makeSut()
    const equipment = await sut.execute({
      name: 'Equipment name',
      description: 'Equipment description',
      cityId: 'city-id'
    })
    expect(equipment.id).toBeTruthy()
  })
})
