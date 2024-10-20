import 'reflect-metadata' 
import express from 'express'
import cors from 'cors'
import { AppDataSource } from './system/Database'
import deliveryRoutes from './routes/deliveryRoutes'
import customerRoutes from './routes/customerRoutes'
import riderRoutes from './routes/riderRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/riders', riderRoutes)
app.use('/deliveries', deliveryRoutes)
app.use('/customers', customerRoutes)

app.get('/', (req, res) => {
    res.send({ message: "Backend is running! Tjaja"})
})

const main = async () => {
    await AppDataSource.initialize() 

    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000')
    })   
}

main()