import { AppDataSource } from '../system/Database'
import { riderSchema } from '../schemas/index'
import { Riders } from '../entities/Riders'
import Router from 'express'

const router = Router() 

router.get('/', (req, res) => {
res.send({ message: "Backend is running!"})
})

router.post('/', async (req, res) => {
const result = riderSchema.safeParse(req.body)
if(!result.success) {
    return res.status(400).json(result.error.errors)
} else {
    res.status(201).json(result.data)
}

const { firstName, lastName, username, phoneNumber, email, notes } = result.data;

const riderRepository = AppDataSource.getRepository(Riders)
const newRider = riderRepository.create({
    firstName,
    lastName,
    username,
    phoneNumber,
    email,
    notes
})

try {
    await riderRepository.save(newRider)
    res.status(201).json(newRider)
} catch (error) {
    if ((error as any).code === '23505') {
    res.status(400).json({ message: "Username already exists" })
    } else {
    res.status(500).json({ message: "server error" })
    }
}
})

router.get('/riders', async (req, res) => {
try {
    const riders = await AppDataSource.getRepository(Riders).find()
    res.status(200).json(riders)
} catch (error) {
    res.status(500).json({ message: "server error" })
}
})

module.exports = router
