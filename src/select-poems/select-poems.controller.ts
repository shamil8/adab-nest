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

  @Get('user/:id')
  getAllByUserId(@Param('id') id: number): Promise<SelectPoems[]> {
    return this.selectPoemService.getAllByUserId(id);
  }

  @Get(':poemId/user/:id')
  getOne(@Param('poemId') poemId: number, @Param('id') id: number): Promise<SelectPoems> {
    return this.selectPoemService.getByPoemAndUserId(poemId, id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createSelectPoemsDto: CreateSelectPoemsDto): Promise<SelectPoems> {
    return this.selectPoemService.create(createSelectPoemsDto);
  }

  @Delete(':poemId/user/:id')
  remove(@Param('poemId') poemId: number, @Param('id') id: number): Promise<SelectPoems> {
    return this.selectPoemService.remove(poemId, id);
  }

  @Put(':poemId')
  update(
    @Body() updateSelectPoemsDto: UpdateSelectPoemsDto,
    @Param('poemId') poemId: number,
  ): Promise<SelectPoems> {
    return this.selectPoemService.update(poemId, updateSelectPoemsDto);
  }
}
