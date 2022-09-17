export interface AnalysisProps {
  phLevel: number
  chlorineLevel: number
  fluorideLevel: number
  flowRate: number
}

export class Analysis {
  private readonly props: AnalysisProps

  get phLevel (): number {
    return this.props.phLevel
  }

  get chlorineLevel (): number {
    return this.props.chlorineLevel
  }

  get fluorideLevel (): number {
    return this.props.fluorideLevel
  }

  get flowRate (): number {
    return this.props.flowRate
  }

  constructor (props: AnalysisProps) {
    const { flowRate, chlorineLevel, fluorideLevel } = props
    if (flowRate === 0) {
      throw new Error('Flow rate cannot be equal zero')
    }
    if (chlorineLevel > 100 || fluorideLevel > 100) {
      throw new Error('Chlorine or fluoride levels cannot be greater than 100')
    }
    this.props = props
  }
}
