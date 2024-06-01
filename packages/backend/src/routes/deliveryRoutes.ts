import { Router } from 'express';
const router = Router();

router.route('/')
  .get((req, res) => {
    res.send({ message: "deliveries route" });
  })
  .post(async (req, res) => {
    res.send({ message: "deliveries post route" });
  })
  .patch(async (req, res) => {
    res.send({ message: "deliveries patch route" });
  })
  .delete(async (req, res) => {
    res.send({ message: "deliveries delete route" });
  });

export default router;