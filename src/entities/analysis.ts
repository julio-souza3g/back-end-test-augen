import { v4 as uuidV4 } from 'uuid'

interface AnalysisProps {
  phLevel: number
  chlorineLevel: number
  fluorideLevel: number
  flowRate: number
  equipmentId: string
}

export class Analysis {
  id: string

  phLevel: number

  chlorineLevel: number

  fluorideLevel: number

  flowRate: number

  equipmentId: string

  createdAt: Date

  constructor (props: AnalysisProps) {
    const { flowRate, chlorineLevel, fluorideLevel } = props
    if (flowRate === 0) {
      throw new Error('Flow rate cannot be equal zero')
    }
    if (chlorineLevel > 100 || fluorideLevel > 100) {
      throw new Error('Chlorine or fluoride levels cannot be greater than 100')
    }
    this.id = uuidV4()
    this.phLevel = props.phLevel
    this.chlorineLevel = props.chlorineLevel
    this.fluorideLevel = props.fluorideLevel
    this.flowRate = props.flowRate
    this.equipmentId = props.equipmentId
    this.createdAt = new Date()
  }
}
