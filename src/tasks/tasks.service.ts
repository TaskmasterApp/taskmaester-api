import { Injectable } from '@nestjs/common';
import { NewTaskInput } from './dto/new-task.input';
import { TasksArgs } from './dto/tasks.args';
import { Task } from './models/task.model';

@Injectable()
export class TasksService {
    /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

    async create(data: NewTaskInput): Promise<Task> {
        console.log('creates a task');
        return {} as any;
    }

    async findOneById(id: string): Promise<Task> {
        console.log('finds a task by Id');
        return {} as any;
    }

    async findAll(recipesArgs: TasksArgs): Promise<Task[]> {
        console.log('returns a list of tasks based on args')
        return [] as Task[];
    }

    async remove(id: string): Promise<boolean> {
        console.log('removes a task');
        return true;
    }
}
