import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import GridCard from './GridCard';

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: 'space-between',
  },
});

const CatGrid = ({data}) => {
  return (
    <>
      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={3}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item: {url, width}}) => <GridCard url={url} />}
        />
      </View>
    </>
  );
};

export default CatGrid;
