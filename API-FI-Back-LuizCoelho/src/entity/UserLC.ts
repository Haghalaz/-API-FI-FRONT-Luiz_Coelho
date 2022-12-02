import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserLC {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}