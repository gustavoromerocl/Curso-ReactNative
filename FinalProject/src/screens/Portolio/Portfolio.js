import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeContext} from '../../context/Theme';
import CatGrid from '../../components/Portfolio/CatGrid';
import {UserContext} from '../../context/User';

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
      rollProfilePhotos,
    } = this.props;
    console.log('portfolio:', rollProfilePhotos);
    return (
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <CatGrid data={rollProfilePhotos} />
      </View>
    );
  }
}

const PortfolioWrapper = () => (
  <ThemeContext.Consumer>
    {({mainTheme}) => (
      <UserContext.Consumer>
        {({rollProfilePhotos}) => (
          <Portfolio
            mainTheme={mainTheme}
            rollProfilePhotos={rollProfilePhotos}
          />
        )}
      </UserContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default PortfolioWrapper;
