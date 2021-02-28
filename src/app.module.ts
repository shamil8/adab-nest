import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelectPoemsController } from './select-poems/select-poems.controller';

@Module({
  imports: [],
  controllers: [AppController, SelectPoemsController],
  providers: [AppService],
})
export class AppModule {}
