import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import themeStyle from '../styles/themeStyle';

const FlatlistExample = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData(1);
    return () => {
      setLoading(false);
      setRefreshing(false);
    };
  }, []);

  const fetchData = async (newPage = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${newPage}&_limit=10`);
      const result = await response.json();
      setData(newPage === 1 ? result : [...data, ...result]);
      setPage(newPage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading) {
      fetchData(page + 1);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(1).then(() => setRefreshing(false));
  };

  const renderFooter = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const renderHeader = () => (
    <View style={styles.stickyHeader}>
      <Text style={styles.headerText}>Sticky Header</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      keyExtractor={item => item.id.toString()}
      ListFooterComponent={renderFooter}
      ListHeaderComponent={renderHeader}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      onRefresh={handleRefresh}
      refreshing={refreshing}
      stickyHeaderIndices={[0]}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color:themeStyle.BLACK
  },
  loader: {
    padding: 10,
    alignItems: 'center'
  },
  stickyHeader: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:themeStyle.BLACK
  }
});

export default FlatlistExample;
