import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
  HttpStatus,
  HttpCode, Header,
} from '@nestjs/common';
import { CreateSelectPoemsDto } from './dto/create-select-poems.dto';
import { UpdateSelectPoemsDto } from './dto/update-select-poems.dto';

@Controller('select-poems')
export class SelectPoemsController {
  @Get()
  getAllByUser(): string {
    return 'getAllByUser';
  }

  @Get(':id')
  getOne(@Param('id') id: number): string {
    return 'getOne: ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createSelectPoemsDto: CreateSelectPoemsDto): string {
    return `poemId: ${createSelectPoemsDto.poemId}, userId: ${createSelectPoemsDto.userId}, category: ${createSelectPoemsDto.category}`;
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
