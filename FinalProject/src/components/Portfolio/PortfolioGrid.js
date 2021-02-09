import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import PortfolioGridCard from './PortfolioGridCard';

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: 'space-between',
  },
  containerText: {
    paddingTop: '50%',
  },
  text: {
    fontSize: 20,
    fontFamily: 'LondrinaSolid-Light',
    textAlign: 'center',
  },
});

const PortfolioGrid = ({data, nav}) => {
  return (
    <>
      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={3}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            return (
              <PortfolioGridCard
                url={item.url}
                nav={nav}
                index={index}
                id={item.id}
              />
            );
          }}
          ListEmptyComponent={() => (
            <View style={styles.containerText}>
              <Text style={styles.text}>
                You did not add images to the portfolio
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default PortfolioGrid;
