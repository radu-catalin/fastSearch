import * as bodyParser from 'body-parser';
import express from 'express';
import { inject } from 'inversify';

import { Config, IConfig } from './config';
import { Injectable } from './ioc/container';
import { ElasticSearchService } from './modules/shared/services/elasticsearch.service';

@Injectable(App)
export class App {
  private expressApp = express();
  private config: IConfig = Config;

  constructor(@inject(ElasticSearchService) private elasticSearchService: ElasticSearchService) {}

  public async start(): Promise<void> {

    await this.elasticSearchService.connect();

    this.expressApp.use(bodyParser.urlencoded({ extended: true }))
    this.expressApp.use(bodyParser.json());

    this.expressApp.listen(this.config.port, () => {
      console.log(`Express is running on port ${this.config.port}`);
    });
  }
}