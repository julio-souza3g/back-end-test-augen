import 'reflect-metadata'
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import '../http/container'
import router from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../../swagger.json'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${Number(process.env.PORT)}`))

export default app
