import { Request, Response } from 'express';

export function ErrorMiddleware(err: Error, _req: Request, res: Response, _next: Function): void {
    console.log(err);
    res.status(500);
    res.json({ error: '500', message: err.message || 'Unknown error' });
}
