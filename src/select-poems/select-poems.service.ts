import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSelectPoemsDto } from './dto/create-select-poems.dto';
import { SelectPoems, SelectPoemsDocument } from './schemas/select-poems.schema';
import { UpdateSelectPoemsDto } from './dto/update-select-poems.dto';

@Injectable()
export class SelectPoemsService {
  constructor(@InjectModel(SelectPoems.name) private selectPoemsModel: Model<SelectPoemsDocument>) {

  }

  async getAll(): Promise<SelectPoems[]> {
    return this.selectPoemsModel.find().exec();
  }

  async getById(id: number): Promise<SelectPoems> {
    return this.selectPoemsModel.findById(id)
  }

  create(selectPoemsDto: CreateSelectPoemsDto): Promise<SelectPoems> {
    const newSelectPoems = new this.selectPoemsModel(selectPoemsDto)

    return newSelectPoems.save()
  }

  async remove(id: number): Promise<SelectPoems> {
    return this.selectPoemsModel.findByIdAndRemove(id)
  }

  async update(id: number, selectPoemsDto: UpdateSelectPoemsDto): Promise<SelectPoems> {
    return this.selectPoemsModel.findByIdAndUpdate(id, selectPoemsDto, { new: true })
  }
}