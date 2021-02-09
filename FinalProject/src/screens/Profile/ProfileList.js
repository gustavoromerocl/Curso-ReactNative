import React from 'react';
import {View, StyleSheet} from 'react-native';
import CatList from '../../components/Home/CatList';
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
});

const ProfileList = ({route}) => {
  const {rollPhotos} = useApiInformation();
  const {backgroundColor} = useTheme();
  const {index} = route.params;
  console.log(index);
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <CatList data={rollPhotos} index={index} />
    </View>
  );
};

export default ProfileList;
