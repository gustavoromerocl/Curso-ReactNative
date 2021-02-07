import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CatList from '../../components/Home/CatList';
import HorizontalScroll from '../../components/Home/HorizontalScroll';
import {ApiContext} from '../../context/LoadApi';
import {ThemeContext} from '../../context/Theme';

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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: [],
      modalActive: false,
    };
  }

  render() {
    const {
      mainTheme: {backgroundColor, textColor, primaryColor},
      categories,
      updateSelectedCategory,
      images,
    } = this.props;

    const selectCategory = (id) => {
      const filterCategory = categories.filter(
        (category) => category.id === id,
      );
      updateSelectedCategory(filterCategory[0]);
    };

    return (
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <HorizontalScroll data={categories} onPress={selectCategory} />
        <CatList data={images} />
      </View>
    );
  }
}

const HomeWrapper = () => (
  <ThemeContext.Consumer>
    {({mainTheme}) => (
      <ApiContext.Consumer>
        {({rollPhotos, categories, updateSelectedCategory, images}) => (
          <Home
            mainTheme={mainTheme}
            rollPhotos={rollPhotos}
            categories={categories}
            updateSelectedCategory={updateSelectedCategory}
            images={images}
          />
        )}
      </ApiContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default HomeWrapper;
