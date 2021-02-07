import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeContext} from '../../context/Theme';
import CatGrid from '../../components/Portfolio/CatGrid';
import {ApiContext} from '../../context/LoadApi';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Portfolio extends Component {
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
    //console.log('portfolio:', rollPhotos);
    return (
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <CatGrid data={rollPhotos} />
      </View>
    );
  }
}

const PortfolioWrapper = () => (
  <ThemeContext.Consumer>
    {({mainTheme}) => (
      <ApiContext.Consumer>
        {({rollPhotos}) => (
          <Portfolio mainTheme={mainTheme} rollPhotos={rollPhotos} />
        )}
      </ApiContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default PortfolioWrapper;
