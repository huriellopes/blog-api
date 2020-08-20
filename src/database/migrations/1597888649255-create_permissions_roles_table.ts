import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createPermissionsRolesTable1597888649255
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'permissions_roles',
        columns: [
          {
            name: 'role_id',
            type: 'uuid',
          },
          {
            name: 'permission_id',
            type: 'uuid',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'permissions_roles',
      new TableForeignKey({
        columnNames: ['permission_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'permissions',
        name: 'fk_permissions_id',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
      })
    );

    await queryRunner.createForeignKey(
      'permissions_roles',
      new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'roles',
        name: 'fk_roles_id',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('permissions_roles', 'fk_permissions_id');
    await queryRunner.dropForeignKey('permissions_roles', 'fk_roles_id');
    await queryRunner.dropTable('permissions_roles');
  }
}
