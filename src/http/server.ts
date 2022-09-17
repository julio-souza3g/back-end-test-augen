import 'reflect-metadata'
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import '../http/container'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${Number(process.env.PORT)}`))

export default app
