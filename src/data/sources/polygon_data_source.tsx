
import axios from 'axios';
import { StockModel } from '../models/stock_model';

export class PolygonDataSource {
    private apiKey = process.env.REACT_APP_API_KEY;
    private apiBase = process.env.REACT_APP_API_BASE_URL;
    private apiUrl = `${this.apiBase}${this.apiKey}`;
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
    
}
