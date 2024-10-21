// src/domain/repositories/StockRepositoryInterface.ts

import { StockEntity } from "../entities/stock_entity";

export interface StockRepositoryInterface {
    getStocks(): Promise<StockEntity[]>;
}
