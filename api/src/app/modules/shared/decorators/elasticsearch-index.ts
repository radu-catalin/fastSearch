import 'reflect-metadata';

import { container } from '@app/ioc';

import { ElasticSearchService } from '../services/elasticsearch.service';

export const elasticSearchIndex = serviceIdentifier => (target) => {
  const elasticSearchService: ElasticSearchService = container.get(ElasticSearchService);
  elasticSearchService.esClient.indices.create({ index: 'movies' });

  return target;
}