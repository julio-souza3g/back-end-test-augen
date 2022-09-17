import { InMemoryEquipmentRepository } from '../../../repositories/in-memory/in-memory-equipment-repository'
import { CreateEquipment } from '../create/create-equipment'
import { GetAllEquipment } from './get-all-equipment'

interface SutTypes {
  createEquipment: CreateEquipment
  sut: GetAllEquipment
}

const makeSut = (): SutTypes => {
  const inMemoryEquipmentRepository = new InMemoryEquipmentRepository()
  const createEquipment = new CreateEquipment(inMemoryEquipmentRepository)
  const sut = new GetAllEquipment(inMemoryEquipmentRepository)
  return {
    createEquipment,
    sut
  }
}
describe('GetAllEquipment', () => {
  it('should be able get all equipment', async () => {
    const { createEquipment, sut } = makeSut()
    await createEquipment.execute({
      name: 'Equipment name',
      description: 'Equipment description',
      cityId: 'city-id'
    })
    await createEquipment.execute({
      name: 'Equipment 2 name',
      description: 'Equipment 2 description',
      cityId: 'city-id-2'
    })
    const equipment = await sut.execute()
    expect(equipment).toBeInstanceOf(Array)
    expect(equipment.length).toBeGreaterThanOrEqual(2)
  })
})
