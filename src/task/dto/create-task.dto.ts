import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
  MinLength,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty({ message: 'Название задачи не может быть пустым' })
  @Length(2, 40, { message: 'Название должно быть от 2 до 40 символов' })
  readonly title: string;

  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'Приоритет должен быть целым числом' })
  @IsPositive({ message: 'Приоритет должен быть числом' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'теги должны быть массивом' })
  @IsEnum(TaskTag, { each: true, message: 'Недопустимое значение тега' })
  @IsOptional()
  tags: string[];

  @IsString({ message: 'Пароль должен быть строкой' })
  @Matches(
    `^[0-9A-Za-z]+$`,
    'Пароль должен содержать хотя бы одну заглавную букву и цифру',
  )
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов' })
  password: string;

  @IsUrl(
    { protocols: ['https'], require_valid_protocol: false },
    { message: 'Некорректный формат url' },
  )
  websiteUrl: string;

  @IsUUID()
  userId: string;
}
