import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BigQuery } from '@google-cloud/bigquery';

@Injectable()
export class BigqueryService implements OnModuleInit {
  private bigQuery: BigQuery;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const projectId = this.configService.get<string>('BIGQUERY_PROJECT_ID');
    const keyFilename = this.configService.get<string>(
      'GOOGLE_APPLICATION_CREDENTIALS',
    );

    this.bigQuery = new BigQuery({
      projectId,
      keyFilename,
    });
  }

  async executeQuery(query: string): Promise<any> {
    try {
      const [rows] = await this.bigQuery.query(query);
      return rows;
    } catch (error) {
      throw new Error(`BigQuery Query Error: ${error.message}`);
    }
  }
}
