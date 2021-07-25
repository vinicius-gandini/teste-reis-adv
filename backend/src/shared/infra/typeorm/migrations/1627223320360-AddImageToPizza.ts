import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddImageToPizza1627223320360
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'pizzas',
      new TableColumn({
        name: 'image',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('pizzas', 'image');
  }
}
