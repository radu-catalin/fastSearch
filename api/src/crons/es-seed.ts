import { container } from '../app/ioc';
import { ElasticSearchService } from '../app/modules/shared/services/elasticsearch.service';

(async (): Promise<void> => {
  const elasticSearchService: ElasticSearchService = container.get(ElasticSearchService);

  await elasticSearchService.connect();
  await elasticSearchService.importToElasticSearch();
})()