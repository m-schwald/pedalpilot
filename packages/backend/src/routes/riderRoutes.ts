import { AppDataSource } from '../system/Database'
import { riderSchema } from '../schemas/index'
import { Riders } from '../entities/Riders'
import Router from 'express'

const router = Router() 

// GET all riders
router.get('/', async (req, res) => {
  try {
    const riders = await AppDataSource.getRepository(Riders).find()
    res.status(200).json(riders)
  } catch (error) {
    res.status(500).json({ message: "server error" })
  }
})

// GET single rider by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const riderRepository = AppDataSource.getRepository(Riders);

  try {
    const rider = await riderRepository.findOneBy({ id: parseInt(id, 10) });

    if (!rider) {
      return res.status(404).json({ message: "Rider not found" });
    }

    res.status(200).json(rider);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

// POST create a new rider 
router.post('/', async (req, res) => {
  const result = riderSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error.errors);
  }

  const { firstName, lastName, username, phoneNumber, email, notes } = result.data;

  const riderRepository = AppDataSource.getRepository(Riders);
  const newRider = riderRepository.create({
    firstName,
    lastName,
    username,
    phoneNumber,
    email,
    notes
  });

  try {
    await riderRepository.save(newRider);
    res.status(201).json(newRider);
  } catch (error) {
    // vorher bei create schon abfragen, ob username schon existiert
    if ((error as any).code === '23505') {
      res.status(400).json({ message: "Username already exists" });
    } else {
      res.status(500).json({ message: "server error" });
    }
  }
});

// PUT update an existing rider
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const result = riderSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error.errors);
  }

  const { firstName, lastName, username, phoneNumber, email, notes } = result.data;
  const riderRepository = AppDataSource.getRepository(Riders);

  try {
    const rider = await riderRepository.findOneBy({ id: parseInt(id, 10) });

    if (!rider) {
      return res.status(404).json({ message: "Rider not found" });
    }

    rider.firstName = firstName;
    rider.lastName = lastName;
    rider.username = username;
    rider.phoneNumber = phoneNumber;
    rider.email = email;
    rider.notes = notes ?? '';

    await riderRepository.save(rider);
    res.status(200).json(rider);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

// DELETE delete rider
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const riderRepository = AppDataSource.getRepository(Riders);

  try {
    const rider = await riderRepository.findOneBy({ id: parseInt(id, 10) });

    if (!rider) {
      return res.status(404).json({ message: "Rider not found" });
    }

    await riderRepository.remove(rider);
    res.status(200).json({ message: "Rider deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router
