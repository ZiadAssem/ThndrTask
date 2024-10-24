
import { StockRepositoryInterface } from '../repositories/stock_repository_interface';
import { StockEntity } from '../entities/stock_entity';

export class GetStocksUseCase {
    private stockRepository: StockRepositoryInterface;

    constructor(stockRepository: StockRepositoryInterface) {
        this.stockRepository = stockRepository;
    }

    async execute(): Promise<StockEntity[]> {
       const stocks : StockEntity[] =await this.stockRepository.getStocks() ;
       console.log('stocksss');
         console.log(stocks);
        return stocks;
    }
}
