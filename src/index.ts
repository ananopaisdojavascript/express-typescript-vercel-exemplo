import express, { Request, Response } from 'express';
import cors from 'cors';
import AppDataSource from './database/data-source'

const app = express()

const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (request: Request, response: Response) => {
  response.send("Hello 😄")
})

app.listen(port, () => {
  AppDataSource.initialize()
  console.log(`Servidor funcionando na porta ${port}`)
})

export default app;