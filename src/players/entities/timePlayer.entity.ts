import {
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class TimePlayer {
  @PrimaryColumn({
    type: 'int',
    nullable: false,
  })
  id: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  id_player: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  total_online: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
