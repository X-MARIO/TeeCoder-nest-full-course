import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  #tasks = [
    {
      id: 1,
      title: 'Task 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Task 2',
      isCompleted: true,
    },
  ];

  public findAll() {
    return this.#tasks;
  }

  public findById(id: number) {
    const task = this.#tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task not found`);
    }

    return task;
  }

  public create(dto: CreateTaskDto) {
    const { title } = dto;

    const newTask = {
      id: this.#tasks.length + 1,
      title,
      isCompleted: false,
    };

    this.#tasks.push(newTask);
    return newTask;
  }

  public update(id: number, dto: UpdateTaskDto) {
    const { title, isCompleted } = dto;

    const task = this.findById(+id);

    task.title = title;
    task.isCompleted = isCompleted;

    return task;
  }

  public pathUpdate(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findById(+id);

    Object.assign(task, dto);

    return task;
  }

  public delete(id: number) {
    const task = this.findById(+id);

    this.#tasks = this.#tasks.filter((task) => task.id !== id);

    return task;
  }
}
