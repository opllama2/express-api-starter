import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 64 })
  username!: string;

  @Column({ length: 255 })
  password!: string;

  @Column({ length: 128 })
  email!: string;
}
