import "reflect-metadata";
import { DataSource } from "typeorm";
import { GoalLC } from "./entity/GoalsLC";
import { UserLC } from "./entity/UserLC";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "faculdade",
  synchronize: true,
  logging: false,
  entities: [GoalLC, UserLC],
  migrations: [],
  subscribers: [],
});
