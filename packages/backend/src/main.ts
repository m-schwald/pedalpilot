import 'reflect-metadata' 
import express from 'express'
import cors from 'cors'
import { AppDataSource } from './system/Database'
import { z } from 'zod'

const app = express()
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const xSchema = z.object({
  name: z.string(),
  age: z.number(),
})

const data = xSchema.safeParse({ name: 'John', age: 25 })

type X = z.infer<typeof xSchema>

const main = async () => {
    await AppDataSource.initialize() 

    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000')
    })   
}

main()