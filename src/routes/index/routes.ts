import express, { Request, Response } from "express"
const route = express()
import { homeController } from "../../controller/index"

route.route("/")
    .get(async (req: Request, res: Response) => homeController.home(req, res))

export { route }