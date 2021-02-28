import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
  HttpStatus,
  HttpCode,
  Header,
} from '@nestjs/common';
import { CreateSelectPoemsDto } from './dto/create-select-poems.dto';
import { UpdateSelectPoemsDto } from './dto/update-select-poems.dto';
import { SelectPoemsService } from './select-poems.service';
import { SelectPoems } from './schemas/select-poems.schema';

@Controller('select-poems')
export class SelectPoemsController {
  constructor(private readonly selectPoemService: SelectPoemsService) {

  }

  @Get()
  getAllByUser(): Promise<SelectPoems[]> {
    return this.selectPoemService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<SelectPoems> {
    return this.selectPoemService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createSelectPoemsDto: CreateSelectPoemsDto): Promise<SelectPoems> {
    return this.selectPoemService.create(createSelectPoemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<SelectPoems> {
    return this.selectPoemService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateSelectPoemsDto: UpdateSelectPoemsDto,
    @Param('id') id: number,
  ): Promise<SelectPoems> {
    return this.selectPoemService.update(id, updateSelectPoemsDto);
  }
}
