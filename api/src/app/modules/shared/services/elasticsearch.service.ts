import csvParser from 'csv-parser';
import * as fs from 'fs';
import { Container } from 'inversify';

import { Client } from '@elastic/elasticsearch';

import { container, Injectable } from '../../../ioc/container';

@Injectable(ElasticSearchService)
export class ElasticSearchService {
  public container: Container = container;
  public esClient: Client;

  public async connect(): Promise<Client> {
    if (!this.esClient) {
      this.esClient = new Client({
        node: 'http://elasticsearch:9200'
      })
    }

    // await this.createIndices();

    return this.esClient;
  }

  public async createIndices(): Promise<void> {
    try {
      await this.esClient.indices.create({ index: 'movies' })
    } catch (err) {
      throw err;
    }
  }

  public async importToElasticSearch(): Promise<void> {
    const seedPath = '/tasks/data';
    const collections = await fs.readdirSync(seedPath);

    collections.forEach(async collection => {
      if (!collection.includes('.csv')) {
        return;
      }

      fs.createReadStream(`${seedPath}/${collection}`)
        .pipe(csvParser())
        .on('data', (data) => {
          this.esClient.index({
            index: 'movies',
            body: data
          }).then((v) => console.log(v))
        });

    });
  }
}