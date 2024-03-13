import { Request, Response } from "express"

export const baseController = async (req: Request, res: Response) => {
    try {
        return res.status(200).send("HELLO WORLD!")
    } catch (err) {
        console.log(err)
    }
}