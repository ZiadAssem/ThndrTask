// src/domain/repositories/StockRepositoryInterface.ts

import { StockDetailsEntity } from "../entities/stock_details_entity";
import { StockEntity } from "../entities/stock_entity";

export interface StockRepositoryInterface {
    getStocks(): Promise<StockEntity[]>;
    getStockDetailsByTicker(ticker: string): Promise<StockDetailsEntity>;
    getStockLogoByTicker(ticker: string): Promise<string>;
}
