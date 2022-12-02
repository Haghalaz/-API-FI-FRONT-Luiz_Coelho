import { GoalLC } from "../entity/GoalsLC";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

export const getGoal = async (request: Request, response: Response) => {
  const users = await AppDataSource.getRepository(GoalLC).find();
  return response.json(users);
};

export const getOneGoal = async (request: Request, response: Response) => {
  const id = request.params;
  const user = await AppDataSource.getRepository(GoalLC).findOneBy(id);
  return response.json(user);
};

export const saveGoal = async (request: Request, response: Response) => {
  const user = await AppDataSource.getRepository(GoalLC).save(request.body);
  return response.json(user);
};

export const updateGoal = async (request: Request, response: Response) => {
  const id = request.params;
  const user = await AppDataSource.getRepository(GoalLC).update(
    id,
    request.body
  );
  if (user.affected == 1) {
    const userUpdated = await AppDataSource.getRepository(GoalLC).findOneBy(id);
    return response.json(userUpdated);
  }
  return response.status(404).json({ message: "User not found!" });
};

export const removeGoal = async (request: Request, response: Response) => {
  const id = request.params;
  const user = await AppDataSource.getRepository(GoalLC).delete(id);
  if (user.affected == 1) {
    return response.json({ message: "User file removed" });
  }
  return response.status(404).json({ message: "User not found!" });
};
