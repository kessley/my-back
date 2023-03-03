import express from 'express'
import cors from 'cors'
import { setupRoutes } from './router'
const app = express()
app.use(cors)
setupRoutes(app)
export default app