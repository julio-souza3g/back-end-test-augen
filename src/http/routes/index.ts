import { Router } from 'express'
import analysisRoutes from './analysis.routes'
import equipmentRoutes from './equipment.routes'

const router = Router()

router.use('/equipment', equipmentRoutes)
router.use('/analysis', analysisRoutes)

export default router
