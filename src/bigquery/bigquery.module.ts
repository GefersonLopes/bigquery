import { Module } from '@nestjs/common';
import { BigqueryService } from './bigquery.service';
import { BigqueryController } from './bigquery.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [BigqueryService],
  controllers: [BigqueryController],
})
export class BigqueryModule {}
