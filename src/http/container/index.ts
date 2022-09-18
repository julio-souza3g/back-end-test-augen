import { container } from 'tsyringe'
import { IAnalysisRepository } from '../../repositories/analysis-repository-protocols'
import { ICityRepository } from '../../repositories/city-repository-protocols'
import { AnalysisRepository } from '../../repositories/db/analysis-repository'
import { CityRepository } from '../../repositories/db/city-repository'
import { EquipmentRepository } from '../../repositories/db/equipment-repository'
import { IEquipmentRepository } from '../../repositories/equipment-repository-protocols'

container.registerSingleton<IAnalysisRepository>('AnalysisRepository', AnalysisRepository)
container.registerSingleton<IEquipmentRepository>('EquipmentRepository', EquipmentRepository)
container.registerSingleton<ICityRepository>('CityRepository', CityRepository)
