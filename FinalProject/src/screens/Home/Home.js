import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CatList from '../../components/Home/CatList';
import {ApiContext} from '../../context/LoadApi';
import {ThemeContext} from '../../context/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: [],
    };
  }

  render() {
    const {
      mainTheme: {backgroundColor, textColor},
      rollPhotos,
    } = this.props;
    return (
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <CatList data={rollPhotos} />
      </View>
    );
  }
}

const HomeWrapper = () => (
  <ThemeContext.Consumer>
    {({mainTheme}) => (
      <ApiContext.Consumer>
        {({rollPhotos}) => (
          <Home mainTheme={mainTheme} rollPhotos={rollPhotos} />
        )}
      </ApiContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default HomeWrapper;
