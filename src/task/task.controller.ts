import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  public findAll() {
    return [
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
  }
}
