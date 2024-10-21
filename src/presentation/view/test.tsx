// src/components/StockList.tsx

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { PolygonDataSource } from '../../data/sources/polygon_data_source';
import { GetStocksUseCase } from '../../domain/usecases/get_stocks';
import { StockRepository } from '../../data/repositories/stock_repository';

const StockList = () => {
    const remoteDataSource = new PolygonDataSource();

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const stockRepository = new StockRepository()
                const useCase = new GetStocksUseCase(stockRepository);
                const stocks = await useCase.execute();
                console.log('Fetched models:', stocks);
            } catch (error) {
                console.error('Error:', (error as Error).message);
            }
        };

        fetchStocks();
    }, []);

    return (
        <View>
            <Text>Check the console for  </Text>
        </View>
    );
};

export default StockList;
