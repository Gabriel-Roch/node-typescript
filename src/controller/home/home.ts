import { Request, Response } from "express"
/*
    use o database para fazer as parada no banco de dados, tem 3 metodos, faça bom uso;;;
*/
import { database } from "../../database/index"

export const home = async (req: Request, res: Response) => {
    try {
        return res.status(200).send("HELLO WORLD!")
    } catch (err) {
        console.log(err)
    }
}