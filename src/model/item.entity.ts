import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'item' })
export class Item {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;
}
