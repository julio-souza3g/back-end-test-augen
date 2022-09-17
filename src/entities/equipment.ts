import { v4 as uuidV4 } from 'uuid'

interface EquipmentProps {
  name: string
  description: string
  cityId: string
}

export class Equipment {
  id: string

  name: string

  description: string

  cityId: string

  createdAt: Date

  constructor (props: EquipmentProps) {
    this.id = uuidV4()
    this.name = props.name
    this.description = props.description
    this.cityId = props.cityId
    this.createdAt = new Date()
  }
}
