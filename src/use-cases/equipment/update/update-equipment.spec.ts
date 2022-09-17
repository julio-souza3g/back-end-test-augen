import { InMemoryEquipmentRepository } from '../../../repositories/in-memory/in-memory-equipment-repository'
import { CreateEquipment } from '../create/create-equipment'
import { UpdateEquipment } from './update-equipment'

interface SutTypes {
  createEquipment: CreateEquipment
  sut: UpdateEquipment
}

const makeSut = (): SutTypes => {
  const inMemoryEquipmentRepository = new InMemoryEquipmentRepository()
  const createEquipment = new CreateEquipment(inMemoryEquipmentRepository)
  const sut = new UpdateEquipment(inMemoryEquipmentRepository)
  return {
    createEquipment,
    sut
  }
}

describe('UpdateEquipment', () => {
  it('should be able update an equipment', async () => {
    const { createEquipment, sut } = makeSut()
    const equipment = await createEquipment.execute({
      name: 'Equipment name',
      description: 'Equipment description',
      cityId: 'city-id'
    })
    const updatedEquipment = await sut.execute(equipment.id, {
      name: 'Updated name',
      description: 'Updated description'
    })
    expect(updatedEquipment.name).toBe('Updated name')
    expect(updatedEquipment.description).toBe('Updated description')
  })

  it('should be able throw if equipment not found', async () => {
    const { sut } = makeSut()
    await expect(sut.execute('invalid_id', {
      name: 'Updated name',
      description: 'Updated description'
    })).rejects.toThrow()
  })
})
