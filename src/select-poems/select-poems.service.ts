import { Injectable } from '@nestjs/common';
import { CreateSelectPoemsDto } from './dto/create-select-poems.dto';

@Injectable()
export class SelectPoemsService {
  private selected = [];

  getAll() {
    return this.selected;
  }

  getById(id: number) {
    return this.selected.find(p => p.id === id)
  }

  create(createSelectPoemsDto: CreateSelectPoemsDto) {
    this.selected.push({
      ...createSelectPoemsDto,
      id: Date.now()
    });
  }
}