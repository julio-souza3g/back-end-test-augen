import { Router } from 'express'
import { CreateCityController } from '../../controllers/city/create-city-controller'
import { DeleteCityController } from '../../controllers/city/delete-city-controller'
import { GetAllCityController } from '../../controllers/city/get-all-city-controller'
import { GetCityByNameController } from '../../controllers/city/get-city-by-name-controller'

const cityRoutes = Router()

const getAllCityController = new GetAllCityController()
const getCityByNameController = new GetCityByNameController()
const createCityController = new CreateCityController()
const deleteCityController = new DeleteCityController()

cityRoutes.get('/', getAllCityController.handle)
cityRoutes.get('/search-by-name', getCityByNameController.handle)
cityRoutes.post('/', createCityController.handle)
cityRoutes.delete('/:id', deleteCityController.handle)

export default cityRoutes
