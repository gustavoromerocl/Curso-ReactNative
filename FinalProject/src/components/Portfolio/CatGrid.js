import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import GridCard from './GridCard';

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: 'space-between',
  },
});

const CatGrid = ({data, nav}) => {
  return (
    <>
      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={3}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            return <GridCard url={item.url} nav={nav} index={index} />;
          }}
        />
      </View>
    </>
  );
};

export default CatGrid;
