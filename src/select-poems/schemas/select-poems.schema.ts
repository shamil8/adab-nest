import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type SelectPoemsDocument = SelectPoems & Document;

@Schema()
export class SelectPoems {
  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  poemId: number;

  @Prop()
  category: string;
}

export const SelectPoemsSchema = SchemaFactory.createForClass(SelectPoems)