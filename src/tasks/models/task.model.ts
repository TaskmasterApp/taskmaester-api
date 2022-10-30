import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'task' })
export class Task {
    @Field(type => ID)
    id: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    description: string

    @Field()
    creationDate: Date;
}