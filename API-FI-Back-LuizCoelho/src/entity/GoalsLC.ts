import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class GoalLC {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  goalName: string;

  @Column()
  savedMoney: string;

  @Column()
  goalValue: string;
}
