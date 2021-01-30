import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CatList from '../../components/Home/CatList';
import {ThemeContext} from '../../context/Theme';
import {UserContext} from '../../context/User';

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
      rollProfilePhotos,
    } = this.props;
    return (
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <CatList data={rollProfilePhotos} />
      </View>
    );
  }
}

const HomeWrapper = () => (
  <ThemeContext.Consumer>
    {({mainTheme}) => (
      <UserContext.Consumer>
        {({rollProfilePhotos}) => (
          <Home mainTheme={mainTheme} rollProfilePhotos={rollProfilePhotos} />
        )}
      </UserContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default HomeWrapper;