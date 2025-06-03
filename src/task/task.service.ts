import { Injectable, NotFoundException } from '@nestjs/common';

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

  public create() {
    const newTask = {
      id: this.#tasks.length + 1,
      title: `Task ${this.#tasks.length + 1}`,
      isCompleted: false,
    };

    this.#tasks.push(newTask);
    return newTask;
  }
}
