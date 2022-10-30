import { NotFoundException } from "@nestjs/common";
import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { NewTaskInput } from "./dto/new-task.input";
import { TasksArgs } from "./dto/tasks.args";
import { Task } from "./models/task.model";
import { TasksService } from "./tasks.service";



@Resolver(of => Task)
export class TasksResolver {

    constructor(private readonly tasksService: TasksService) { }

    @Query(returns => Task)
    async task(@Args('id') id: string): Promise<Task> {
        const task = await this.tasksService.findOneById(id);
        if (!task) throw new NotFoundException(id);
        return task;
    }

    @Query(returns => [Task])
    tasks(@Args() tasksArgs: TasksArgs): Promise<Task[]> {
        return this.tasksService.findAll(tasksArgs);
    }

    @Mutation(retunrs => Task)
    async addTask(
        @Args('NewTaskInput') newTaskInput: NewTaskInput
    ): Promise<Task> {
        const task = await this.tasksService.create(newTaskInput);
        return task;
    }

    @Mutation(returns => Boolean)
    async removeTask(@Args('id') id: string) {
        return this.tasksService.remove(id);
    }

}