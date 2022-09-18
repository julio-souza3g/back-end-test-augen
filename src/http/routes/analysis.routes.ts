import { Router } from 'express'
import { CreateAnalysisController } from '../../controllers/analysis/create-analysis-controller'
import { DeleteAnalysisController } from '../../controllers/analysis/delete-analysis-controller'
import { GetAllAnalysisController } from '../../controllers/analysis/get-all-analysis-controller'
import { GetAnalysisByDateController } from '../../controllers/analysis/get-analysis-by-date-controller'
import { GetAnalysisByIdController } from '../../controllers/analysis/get-analysis-by-id-controller'

const analysisRoutes = Router()

const getAllAnalysisController = new GetAllAnalysisController()
const getAnalysisByIdController = new GetAnalysisByIdController()
const getAnalysisByDateController = new GetAnalysisByDateController()
const createAnalysisController = new CreateAnalysisController()
const deleteAnalysisController = new DeleteAnalysisController()

analysisRoutes.get('/', getAllAnalysisController.handle)
analysisRoutes.get('/:id', getAnalysisByIdController.handle)
analysisRoutes.get('/search-by-date', getAnalysisByDateController.handle)
analysisRoutes.post('/', createAnalysisController.handle)
analysisRoutes.delete('/:id', deleteAnalysisController.handle)

export default analysisRoutes
