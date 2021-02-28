import { Module } from '@nestjs/common';
import { SelectPoemsService } from './select-poems.service';
import { SelectPoemsController } from './select-poems.controller';

@Module({
  providers: [SelectPoemsService],
  controllers: [SelectPoemsController]
})

export class SelectPoemsModule {
}