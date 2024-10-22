
import axios from 'axios';
import { StockModel } from '../models/stock_model';
import { StockDetailsModel } from '../models/stock_details_model';


interface PolygonDataSourceInterface {
    fetchStocks(): Promise<StockModel[]>;
    fetchStockLogoByTicker(ticker: string): Promise<string>;
    fetchStockDetailsByTicker(ticker: string): Promise<StockDetailsModel>;


}
export class PolygonDataSource implements PolygonDataSourceInterface {
    
    private apiKey = process.env.REACT_APP_API_KEY;
    private apiBase = process.env.REACT_APP_API_BASE_URL;
    private apiSuffix = process.env.REACT_APP_API_SUFFIX_URL;
    
    private apiUrl = `${this.apiBase}${this.apiSuffix}${this.apiKey}`;
    


    async fetchStocks(): Promise<StockModel[]> {
        try {
            console.log('Test');
            console.log(this.apiUrl);

            const response = await axios.get(this.apiUrl, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`, 
                    'Content-Type': 'application/json', 
                },
            });

            return response.data.results.map((item: any) => new StockModel(item));
        } catch (error) {
            console.error(`Error fetching stocks: ${this.apiUrl}`, error); // Log the complete error
            throw new Error('Error fetching stocks: ' + (error as Error).message);
        }
    }

    async fetchStockLogoByTicker(ticker: string): Promise<string> {
        try{
            const model = await this.fetchStockDetailsByTicker(ticker);
            return model.branding.logo_url;
        }
        catch (error) {
            console.error(`Error fetching stock logo: ${ticker}`, error); // Log the complete error
            throw new Error('Error fetching stock logo: ' + (error as Error).message);
        }
    }

    async fetchStockDetailsByTicker(ticker: string): Promise<StockDetailsModel> {
        try {
            const response = await axios.get(`${this.apiBase}/${ticker}${this.apiSuffix}${this.apiKey}`, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`, 
                    'Content-Type': 'application/json', 
                },
            });

            return new StockDetailsModel(response.data);
        } catch (error) {
            console.error(`Error fetching stock: ${this.apiUrl}/${ticker}`, error); // Log the complete error
            throw new Error('Error fetching stock: ' + (error as Error).message);
        }
    }
    
}
