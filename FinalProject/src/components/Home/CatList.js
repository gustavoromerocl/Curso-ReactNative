import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CatCard from './CatCard';

const CatList = ({data, index, favorite = false}) => {
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <CatCard url={item.url} id={item.id} favorite={favorite} />
        )}
        initialScrollIndex={index}
        getItemLayout={(data, index) => ({
          length: 528,
          offset: 528 * index,
          index,
        })}
      />
    </>
  );
};

export default CatList;
