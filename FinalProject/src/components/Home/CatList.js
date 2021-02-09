import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CatCard from './CatCard';

const CatList = ({data, index}) => {
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item: {url, width}}) => <CatCard url={url} />}
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
