import express, { Express, Request, Response } from 'express';
import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';

import { EventSearch } from '../models/eventSearch';
import { EventResponse } from '../models/eventResponse';

dotenv.config();

export const eventRouter: Express = express();

eventRouter.get('/', async (req: Request, res: Response) => {
    try {
        const { city, startDateTime, endDateTime } = req.query as EventSearch;

        const payload = {
            apikey: process.env.TICKETMASTER_API_KEY,
            locale: '*',
            city,
            startDateTime: (startDateTime ? (startDateTime + ':00Z') : ''), // TODO: Fix this hack
            endDateTime: (endDateTime ? (endDateTime + ':00Z') : ''), // TODO: Fix this hack
        };

        const response = (await axios.get<EventResponse>(process.env.TICKETMASTER_API_URL!, { params: payload })).data;

        // TODO: Move this into a business logic layer
        const result = {
            pagination: response.page,
            results: response._embedded.events,
            navigation: response._links,
        }

        return res.status(200).json(result);
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error(error.response?.data);
            return res.status(500).json(error);
        }

        return res.status(500).send(error);
    }
});