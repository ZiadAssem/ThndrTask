import React, { useEffect, useState, startTransition } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../redux/stock_slice';
import StockItem from '../components/stock_item_component';
import { AppDispatch } from '../../../redux/redux_store';
import { StockEntity } from '../../../domain/entities/stock_entity';
import { GetStocksUseCase } from '../../../domain/usecases/get_stocks';
import { StockRepository } from '../../../data/repositories/stock_repository';

const StocksScreen = () => {
  const [loading, setLoading] = useState(false);  // Manage loading state
  const stockRepository = new StockRepository();
  const getStocksUseCase = new GetStocksUseCase(stockRepository);
  const dispatch = useDispatch<AppDispatch>();

  // Fetch stocks using the use case
  const stocks: StockEntity[] = useSelector((state: any) => state.todo.stocks.stocks);
  console.log('Stocks:', stocks);

  useEffect(() => {
    // Async fetch stocks
    const fetchStocksData = async () => {
      try {
        setLoading(false);
        dispatch(fetchStocks());  // Dispatch fetched stocks
      } finally {
        setLoading(false); // Stop loading when data is fetched
      }
    };

    fetchStocksData();
  }, [dispatch]);

  return (
    <View >
      {loading ? (
        <Text>Loading</Text>
      ) : (
        
        <FlatList
          data={stocks}
          numColumns={2}
          renderItem={({ item }) => (
            <StockItem ticker={item.ticker} name={item.name} />
          )}
          keyExtractor={(item) => item.ticker}
        />
        // <Text>HEEEEEEEEEEEEEEEEEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYYYY Stocks</Text>
      )}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 10,
//   },
// });

export default StocksScreen;
