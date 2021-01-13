import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserImages1609852136864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

         await queryRunner.createTable(new Table({
             name : 'images',
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
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name:'barber_id',
                    type: 'integer',
                }
               
             ],
             foreignKeys: [
                 {
                     name:'UserImages',
                     columnNames:['barber_id'],
                     referencedTableName: 'barbers',
                     referencedColumnNames: ['id'],
                     onUpdate: 'CASCADE',
                     onDelete: 'CASCADE',
                 }
             ]
         }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('images')

    }

}
