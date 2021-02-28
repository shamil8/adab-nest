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

@Controller('select-poems')
export class SelectPoemsController {
  constructor(private readonly selectPoemService: SelectPoemsService) {

  }

  @Get()
  getAllByUser(): any {
    return this.selectPoemService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): any {
    return this.selectPoemService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createSelectPoemsDto: CreateSelectPoemsDto): any {
    return this.selectPoemService.create(createSelectPoemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): string {
    return 'Remove ' + id;
  }

  @Put(':id')
  update(
    @Body() updateSelectPoemsDto: UpdateSelectPoemsDto,
    @Param('id') id: number,
  ): string {
    return `Need to update ${id} with poemId: ${updateSelectPoemsDto.poemId}`;
  }
}
