// src/domain/entities/StockEntity.ts

export class StockEntity {
    ticker: string;
    name: string;
    market: string;
    locale: string;
    primaryExchange: string;
    type: string;
    active: boolean;
    currencyName: string;
    cik: string;
    compositeFigi: string;
    shareClassFigi: string;
    lastUpdatedUtc: string;

    constructor(
        ticker: string,
        name: string,
        market: string,
        locale: string,
        primaryExchange: string,
        type: string,
        active: boolean,
        currencyName: string,
        cik: string,
        compositeFigi: string,
        shareClassFigi: string,
        lastUpdatedUtc: string
    ) {
        this.ticker = ticker;
        this.name = name;
        this.market = market;
        this.locale = locale;
        this.primaryExchange = primaryExchange;
        this.type = type;
        this.active = active;
        this.currencyName = currencyName;
        this.cik = cik;
        this.compositeFigi = compositeFigi;
        this.shareClassFigi = shareClassFigi;
        this.lastUpdatedUtc = lastUpdatedUtc;
    }
}
