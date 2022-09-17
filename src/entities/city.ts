import { v4 as uuidV4 } from 'uuid'

interface CityProps {
  name: string
  state: string
  region: string
}

export class City {
  id: string

  name: string

  state: string

  region: string

  createdAt: Date

  constructor (props: CityProps) {
    this.id = uuidV4()
    this.name = props.name
    this.state = props.state
    this.region = props.region
    this.createdAt = new Date()
  }
}
