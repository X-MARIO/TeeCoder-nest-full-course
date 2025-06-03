import { Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('all')
  public findAll() {
    return this.taskService.findAll();
  }

  @Get('all')
  public find() {
    return this.taskService.findAll();
  }

  @Get('by-id/:id')
  public findById(@Param('id') id: string) {
    return this.taskService.findById(+id);
  }

  @Post()
  public create() {
    return this.taskService.create();
  }
}
