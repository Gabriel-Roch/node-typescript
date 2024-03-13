import express, { Request, Response } from "express"
const route = express()
import { controllers } from "../../controller/controllers"

route.route("/")
    .get((req: Request, res: Response) => controllers.baseController(req, res))

export { route }