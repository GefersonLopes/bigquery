import { Controller, Get, Query } from '@nestjs/common';
import { BigqueryService } from './bigquery.service';

@Controller('bigquery')
export class BigqueryController {
  constructor(private readonly bigQueryService: BigqueryService) {}

  @Get('query')
  async executeQuery(@Query('q') query: string) {
    return this.bigQueryService.executeQuery(query);
  }
}
