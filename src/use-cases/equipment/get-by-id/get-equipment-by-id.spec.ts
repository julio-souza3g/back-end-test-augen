import 'reflect-metadata'
import { InMemoryEquipmentRepository } from '../../../repositories/in-memory/in-memory-equipment-repository'
import { CreateEquipment } from '../create/create-equipment'
import { GetEquipmentById } from './get-equipment-by-id'

interface SutTypes {
  createEquipment: CreateEquipment
  sut: GetEquipmentById
}

const makeSut = (): SutTypes => {
  const inMemoryEquipmentRepository = new InMemoryEquipmentRepository()
  const createEquipment = new CreateEquipment(inMemoryEquipmentRepository)
  const sut = new GetEquipmentById(inMemoryEquipmentRepository)
  return {
    createEquipment,
    sut
  }
}

describe('GetEquipmentById', () => {
  it('should be able get an equipment by id', async () => {
    const { createEquipment, sut } = makeSut()
    const equipment = await createEquipment.execute({
      name: 'Equipment name',
      description: 'Equipment description',
      cityId: 'city-id'
    })
    const equipmentById = await sut.execute(equipment.id)
    expect(equipmentById).toBeTruthy()
  })

  it('should be able throw if equipment not found', async () => {
    const { sut } = makeSut()
    await expect(sut.execute('invalid_id')).rejects.toThrow()
  })
})
