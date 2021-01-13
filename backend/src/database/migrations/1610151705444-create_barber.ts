import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBarber1610151705444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

       await queryRunner.createTable(new Table({
          name: 'barbers',
          columns:[
              {
                  name: 'id',
                  type: 'integer',
                  unsigned: true,
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
              },
              {
                  name: 'name',
                  type: 'varchar'
              },
              {
                  name : 'stars',
                  type : 'decimal',
                  precision: 1,
              }


          ]

         
       }))


    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('barbers')
    }

}
