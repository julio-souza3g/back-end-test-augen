import { Router } from 'express'
import analysisRoutes from './analysis.routes'
import cityRoutes from './city.routes'
import equipmentRoutes from './equipment.routes'

const router = Router()

router.use('/equipment', equipmentRoutes)
router.use('/analysis', analysisRoutes)
router.use('/city', cityRoutes)

export default router
