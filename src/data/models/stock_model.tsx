// src/data/models/StockModel.ts

import { StockEntity } from "../../domain/entities/stock_entity";
export class StockModel extends StockEntity {
    constructor(data: any) {
        super(
            data.ticker,
            data.name,
            data.market,
            data.locale,
            data.primary_exchange,
            data.type,
            data.active,
            data.currency_name,
            data.cik,
            data.composite_figi,
            data.share_class_figi,
            data.last_updated_utc
        );
    }
}
