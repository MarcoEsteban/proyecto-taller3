import { Response } from "express";

export const errorHanddle = (res: Response, error: string) => {
    res.status(500);
    res.send({ error })
}