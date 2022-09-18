import 'reflect-metadata'
import { InMemoryEquipmentRepository } from '../../../repositories/in-memory/in-memory-equipment-repository'
import { CreateEquipment } from '../create/create-equipment'
import { GetEquipmentById } from '../get-by-id/get-equipment-by-id'
import { DeleteEquipment } from './delete-equipment'

interface SutTypes {
  createEquipment: CreateEquipment
  getEquipmentById: GetEquipmentById
  sut: DeleteEquipment
}

const makeSut = (): SutTypes => {
  const inMemoryEquipmentRepository = new InMemoryEquipmentRepository()
  const createEquipment = new CreateEquipment(inMemoryEquipmentRepository)
  const getEquipmentById = new GetEquipmentById(inMemoryEquipmentRepository)
  const sut = new DeleteEquipment(inMemoryEquipmentRepository)
  return {
    createEquipment,
    getEquipmentById,
    sut
  }
}

describe('DeleteEquipment', () => {
  it('should be able delete an equipment', async () => {
    const { createEquipment, getEquipmentById, sut } = makeSut()
    const equipment = await createEquipment.execute({
      name: 'Equipment name',
      description: 'Equipment description',
      cityId: 'city-id'
    })
    await sut.execute(equipment.id)
    await expect(getEquipmentById.execute(equipment.id)).rejects.toThrow()
  })

  it('should be able throw if equipment not found', async () => {
    const { sut } = makeSut()
    await expect(sut.execute('invalid_id')).rejects.toThrow()
  })
})
