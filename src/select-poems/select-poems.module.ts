import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SelectPoemsService } from './select-poems.service';
import { SelectPoemsController } from './select-poems.controller';
import { SelectPoems, SelectPoemsSchema} from './schemas/select-poems.schema';

@Module({
  providers: [SelectPoemsService],
  controllers: [SelectPoemsController],
  imports: [
    MongooseModule.forFeature([{ name: SelectPoems.name, schema: SelectPoemsSchema }]),

  ]
})

export class SelectPoemsModule {
}