import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CatCard from './CatCard';

const CatList = ({data}) => {
  //const [currentData, updateCurrentData] = useState(false);

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item: {url, width}}) => <CatCard url={url} />}
      />
    </>
  );
};

export default CatList;
