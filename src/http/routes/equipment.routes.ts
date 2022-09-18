import { Router } from 'express'
import { CreateEquipmentController } from '../../controllers/equipment/create-equipment-controller'
import { DeleteEquipmentController } from '../../controllers/equipment/delete-equipment-controller'
import { GetAllEquipmentController } from '../../controllers/equipment/get-all-equipment-controller'
import { GetEquipmentByIdController } from '../../controllers/equipment/get-equipment-by-id-controller'
import { UpdateEquipmentController } from '../../controllers/equipment/update-equipment-controller'

const equipmentRoutes = Router()

const getAllEquipmentController = new GetAllEquipmentController()
const getEquipmentByIdController = new GetEquipmentByIdController()
const createEquipmentController = new CreateEquipmentController()
const updateEquipmentController = new UpdateEquipmentController()
const deleteEquipmentController = new DeleteEquipmentController()

equipmentRoutes.get('/', getAllEquipmentController.handle)
equipmentRoutes.get('/:id', getEquipmentByIdController.handle)
equipmentRoutes.post('/', createEquipmentController.handle)
equipmentRoutes.patch('/:id', updateEquipmentController.handle)
equipmentRoutes.delete('/:id', deleteEquipmentController.handle)

export default equipmentRoutes
