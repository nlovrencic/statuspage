import express, { Request, Response } from 'express';


const router: express.Router = express.Router({
  caseSensitive: true,
  strict: true,
});

router.post('/liveness', async (_req: Request, res: Response) => {
  res.sendStatus(200);
});

export default router;