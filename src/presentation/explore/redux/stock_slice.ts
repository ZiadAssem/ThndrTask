// stocksSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetStocksUseCase, } from '../../../domain/usecases/get_stocks';
import { GetStockLogoByTickerUseCase } from '../../../domain/usecases/get_stock_logo_by_ticker';
import { StockRepository } from '../../../data/repositories/stock_repository';
import { GetStockDetailsByTickerUseCase } from '../../../domain/usecases/get_stock_details_by_ticker';
import { StockDetailsEntity } from '../../../domain/entities/stock_details_entity';
import { StockEntity } from '../../../domain/entities/stock_entity';

const stockRepository = new StockRepository()
const getStockLogoByTickerUseCase = new GetStockLogoByTickerUseCase(stockRepository);
const getStocksUseCase = new GetStocksUseCase(stockRepository);
const getStockDetailsByTickerUseCase = new GetStockDetailsByTickerUseCase(stockRepository);
// Async actions
export const fetchStocks = createAsyncThunk('fetchStocks', async () => {
    const stocks: StockEntity[] = await getStocksUseCase.execute();
    console.log('stocks                                            ');
    console.log(stocks);
    return {stocks};  // returns the list of stock entities
});

// export const fetchStockDetails = createAsyncThunk<{ ticker: string, stockDetailsEntity: StockDetailsEntity }, string>('stocks/fetchStockLogo', async (ticker: string) => {
//     const  stockDetailsEntity = await getStockDetailsByTickerUseCase.execute(ticker);
//     return { ticker, stockDetailsEntity };  // returns the logo URL
// });

interface StocksState {
    stocks: StockEntity[];  // array of stock entities
    // details: { [key: string]: StockDetailsEntity };  // mapping of ticker to logo URLs
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: StocksState = {
    stocks: [],  // array of stock entities
    // details: {},   // mapping of ticker to logo URLs
    loading: false,
    error: null,
};

// Reducer and actions
const stocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStocks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStocks.fulfilled, (state, action) => {
                state.loading = false;
                // console.log('Fetched stocks:', action.payload.stocks);
                state.stocks = action.payload.stocks;
            })
            .addCase(fetchStocks.rejected, (state) => {
                state.loading = false;
                state.error = `Failed to fetch stocks`;

            });
            // .addCase(fetchStockDetails.fulfilled, (state, action) => {
            //     state.details[action.payload.ticker] = action.payload.stockDetailsEntity;
            // });
    },
});

export default stocksSlice.reducer;
