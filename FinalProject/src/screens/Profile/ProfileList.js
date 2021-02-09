import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CatCard from '../../components/Home/CatCard';
import {useApiInformation} from '../../context/LoadApi';
import {useTheme} from '../../context/Theme';
import ProfileCard from '../../components/Profile/ProfileCard';

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
});

const ProfileList = ({route}) => {
  const {rollPhotos} = useApiInformation();
  const {backgroundColor} = useTheme();
  const {index} = route.params;
  console.log(index);
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <FlatList
        data={rollPhotos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ProfileCard url={item.url} id={item.id} favorite={false} />
        )}
        initialScrollIndex={index}
        getItemLayout={(data, index) => ({
          length: 528,
          offset: 528 * index,
          index,
        })}
      />
    </View>
  );
};

export default ProfileList;
