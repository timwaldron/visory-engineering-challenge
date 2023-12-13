import express, { Express, Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const eventRouter: Express = express();

eventRouter.get('/', async (req: Request, res: Response) => {
    const { location, startDate, endDate } = req.query;

    const response = (await axios.get(process.env.TICKETMASTER_API_URL!, {
        params: {
            apikey: process.env.TICKETMASTER_API_KEY,
            location,
            startDate,
            endDate,
        }
    })).data;

    res.status(200).json(response);
});