import express from 'express'
import 'dotenv/config'

const app = express()

app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${Number(process.env.PORT)}`))

export default app
