import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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
  public create(@Body() task: CreateTaskDto) {
    return this.taskService.create(task);
  }

  @Put(':id')
  public update(@Param('id') id: number, @Body() task: UpdateTaskDto) {
    return this.taskService.update(id, task);
  }

  @Patch(':id')
  public pathUpdate(@Param('id') id: number, @Body() task: UpdateTaskDto) {
    return this.taskService.pathUpdate(id, task);
  }

  @Delete(':id')
  public delete(@Param('id') id: string) {
    return this.taskService.delete(+id);
  }
}
