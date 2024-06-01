import { Router } from 'express';

const router = Router();

router.route('/')
  .get((req, res) => {
    res.send({ message: "customer route" });
  })
  .post(async (req, res) => {
    res.send({ message: "customer post route" });
  })
  .patch(async (req, res) => {
    res.send({ message: "customer patch route" });
  })
  .delete(async (req, res) => {
    res.send({ message: "customer delete route" });
  });

router.route('/:id')
  .get((req, res) => {
    res.send({ message: "customer route with id" });
  });

export default router;