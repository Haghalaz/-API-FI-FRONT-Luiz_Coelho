import { Router, Request, Response } from "express";
import {
  getUser,
  getOneUser,
  saveUser,
  updateUser,
  removeUser,
} from "./controller/UsersController";
import {
  getGoal,
  getOneGoal,
  saveGoal,
  updateGoal,
  removeGoal,
} from "./controller/GoalsController";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Olá Mundo!" });
});

routes.get("/User", getUser);
routes.get("/User/:id", getOneUser);
routes.post("/User", saveUser);
routes.put("/User/:id", updateUser);
routes.patch("/User/:id", removeUser);

routes.get("/Goal", getGoal);
routes.get("/Goal/:id", getOneGoal);
routes.post("/Goal", saveGoal);
routes.put("/Goal/:id", updateGoal);
routes.delete("/Goal/:id", removeGoal);

export default routes;
