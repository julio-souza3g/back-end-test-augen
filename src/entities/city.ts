import { v4 as uuidV4 } from 'uuid'

interface CityProps {
  name: string
  ibgeCode: number
  uf: string
  region: string
}

export class City {
  id: string

  name: string

  ibgeCode: number

  uf: string

  region: string

  createdAt: Date

  constructor (props: CityProps) {
    this.id = uuidV4()
    this.name = props.name
    this.ibgeCode = props.ibgeCode
    this.uf = props.uf
    this.region = props.region
    this.createdAt = new Date()
  }
}
