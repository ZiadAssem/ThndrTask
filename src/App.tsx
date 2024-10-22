// src/components/StockList.tsx

import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/redux_store';
import { View, Text, FlatList } from 'react-native';
import { PolygonDataSource } from './data/sources/polygon_data_source';
import { GetStocksUseCase } from './domain/usecases/get_stocks';
import { StockRepository } from './data/repositories/stock_repository';
import StocksScreen from './presentation/explore/screens/stocks_screen';

const StockList = () => {



    return (
        <Provider store={store}>
            <View>
                <StocksScreen></StocksScreen>
            </View>
        </Provider>
    );
};

export default StockList;

