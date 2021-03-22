import { elasticSearchIndex } from '../../shared/decorators/elasticsearch-index';

@elasticSearchIndex({
  index: 'movies'
})
export class Movie {
  public id: string;
  public film: string;
  public genre: string;
  public leadStudio: string;
  public audienceScore: number;
  public profitability: number;
  public rottenTomatoes: number;
  public worldwideGross: string;
  public year: number;
}