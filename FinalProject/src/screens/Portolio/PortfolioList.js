import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CatCard from '../../components/Home/CatCard';
import {useApiInformation} from '../../context/LoadApi';
import {useTheme} from '../../context/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterButton: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    borderRadius: 30,
    padding: 10,
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

const PortfolioList = ({route}) => {
  const {backgroundColor} = useTheme();
  const {portfolioImages} = useApiInformation();
  const {index} = route.params;

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <FlatList
        data={portfolioImages}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <CatCard url={item.url} id={item.id} favorite={true} />
        )}
        initialScrollIndex={index}
        getItemLayout={(data, index) => ({
          length: 528,
          offset: 528 * index,
          index,
        })}
        ListEmptyComponent={() => (
          <View style={styles.containerText}>
            <Text style={styles.text}>Empty portfolio</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PortfolioList;
