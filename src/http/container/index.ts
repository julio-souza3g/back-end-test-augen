import { container } from 'tsyringe'
import { IAnalysisRepository } from '../../repositories/analysis-repository-protocols'
import { AnalysisRepository } from '../../repositories/db/analysis-repository'
import { EquipmentRepository } from '../../repositories/db/equipment-repository'
import { IEquipmentRepository } from '../../repositories/equipment-repository-protocols'

container.registerSingleton<IAnalysisRepository>('AnalysisRepository', AnalysisRepository)
container.registerSingleton<IEquipmentRepository>('EquipmentRepository', EquipmentRepository)
