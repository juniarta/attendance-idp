import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'users';
export class userTable1644092860241 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    if (!(await queryRunner.getTable(tableName))) {
      await queryRunner.createTable(
        new Table({
          name: tableName,
          columns: [
            {
              name: 'uuid',
              type: 'varchar',
              length: '32',
              isPrimary: true,
            },
            {
              name: 'email',
              type: 'varchar',
              length: '255',
              isNullable: false,
            },
            {
              name: 'password',
              type: 'varchar',
              length: '255',
              isNullable: false,
            },
            {
              name: 'created_at',
              type: 'datetime',
              isNullable: false,
            },
            {
              name: 'updated_at',
              type: 'datetime',
              isNullable: false,
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    if (await queryRunner.getTable(tableName)) {
      await queryRunner.dropTable(tableName, true);
    }
  }
}
