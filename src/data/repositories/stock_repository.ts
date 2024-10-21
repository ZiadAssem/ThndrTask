// src/data/repositories/StockRepository.ts

import { PolygonDataSource } from '../sources/polygon_data_source';
import { StockEntity } from '../../domain/entities/stock_entity';
import { StockRepositoryInterface } from '../../domain/repositories/stock_repository_interface';

export class StockRepository implements StockRepositoryInterface {
    private remoteDataSource: PolygonDataSource;

    constructor() {
        this.remoteDataSource = new PolygonDataSource();
    }

    async getStocks(): Promise<StockEntity[]> {
        const stockModels = await this.remoteDataSource.fetchStocks();
        return stockModels; 
    }
}
