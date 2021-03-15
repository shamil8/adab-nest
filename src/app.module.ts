import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelectPoemsModule } from './select-poems/select-poems.module';
import { MONGO_CON_STRING } from './constants/main';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_CON_STRING),
    SelectPoemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
