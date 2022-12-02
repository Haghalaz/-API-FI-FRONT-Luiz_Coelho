import { UserLC } from "../entity/UserLC";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

export const getUser = async (request: Request, response: Response) => {
  const users = await AppDataSource.getRepository(UserLC).find();
  return response.json(users);
};

export const getOneUser = async (request: Request, response: Response) => {
  const id = request.params;
  const user = await AppDataSource.getRepository(UserLC).findOneBy(id);
  return response.json(user);
};

export const saveUser = async (request: Request, response: Response) => {
  const user = await AppDataSource.getRepository(UserLC).save(request.body);
  return response.json(user);
};

export const updateUser = async (request: Request, response: Response) => {
  const id = request.params;
  const user = await AppDataSource.getRepository(UserLC).update(
    id,
    request.body
  );
  if (user.affected == 1) {
    const userUpdated = await AppDataSource.getRepository(UserLC).findOneBy(id);
    return response.json(userUpdated);
  }
  return response.status(404).json({ message: "User not found!" });
};

export const removeUser = async (request: Request, response: Response) => {
  const id = request.params;
  const user = await AppDataSource.getRepository(UserLC).delete(id);
  if (user.affected == 1) {
    return response.json({ message: "User file removed" });
  }
  return response.status(404).json({ message: "User not found!" });
};
