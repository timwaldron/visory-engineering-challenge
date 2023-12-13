import express, { Express, Request, Response } from 'express';
import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';

import { EventSearch } from '../models/eventSearch';
import { EventResponse } from '../models/eventResponse';

dotenv.config();

export const eventRouter: Express = express();

eventRouter.get('/', async (req: Request, res: Response) => {
    try {
        const { city, startDateTime, endDateTime, page, size } = req.query;

        let payload = {
            apikey: process.env.TICKETMASTER_API_KEY,
            locale: '*',
            city,
            startDateTime: (startDateTime ? (startDateTime + ':00Z') : ''), // TODO: Fix this hack
            endDateTime: (endDateTime ? (endDateTime + ':00Z') : ''), // TODO: Fix this hack
            size: 20, // Hardcode for now, should be a dropdown in the UI to control this with a here that we aren't requesting too much data
        } as any; // TODO: I don't like this, need to create a type for it

        if (page) { payload['page'] = page; }
        // if (size) { payload['size'] = size; }

        console.log(payload);
        const response = (await axios.get<EventResponse>(process.env.TICKETMASTER_API_URL!, { params: payload })).data;

        // TODO: Move this into a business logic layer or mapper
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