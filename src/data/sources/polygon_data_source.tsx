
import axios from 'axios';
import { StockModel } from '../models/stock_model';

export class PolygonDataSource {
    private apiUrl = `https://api.polygon.io/v3/reference/tickers?active=true&limit=100&apiKey=R1SfdCNP9hWRKSIA0ZpYMLz_vlK95kSv`
    async fetchStocks(): Promise<StockModel[]> {
        try {
            const response = await axios.get(this.apiUrl, {
                headers: {
                    'Authorization': `Bearer R1SfdCNP9hWRKSIA0ZpYMLz_vlK95kSv`, // Correctly include your API key
                    'Content-Type': 'application/json', // Include Content-Type if necessary
                },
            });

            return response.data.results.map((item: any) => new StockModel(item));
        } catch (error) {
            console.error(`Error fetching stocks: ${this.apiUrl}`, error); // Log the complete error
            throw new Error('Error fetching stocks: ' + (error as Error).message);
        }
    }
    
}
