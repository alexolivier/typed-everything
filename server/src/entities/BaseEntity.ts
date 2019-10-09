import { ObjectType, Field } from "type-graphql";
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
export class BaseEntity {
    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}
