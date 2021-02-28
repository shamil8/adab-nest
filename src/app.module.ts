import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelectPoemsModule } from './select-poems/select-poems.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    SelectPoemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
