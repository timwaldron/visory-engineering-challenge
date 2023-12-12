import express, { Express, Request, Response } from 'express';
export const ticketRouter: Express = express();

ticketRouter.get('/events', (req: Request, res: Response) => {
    console.log(req.query);

    res.status(200).send('Awesome work!');
});