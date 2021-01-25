import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Axios from 'axios';
import CatList from '../../components/CatList';
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

  fetchCat = async () => {
    try {
      Axios.defaults.headers.common['x-api-key'] =
        '2c7e068b-6c10-4846-847c- a50e06b2baa7';
      const {status, data} = await Axios.get(
        'https://api.thecatapi.com/v1/images/search',
        {
          params: {limit: 10, size: 'full'},
        },
      );
      if (status === 200) {
        this.setState({currentData: data});
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchCat();
  };

  render() {
    const {currentData} = this.state;
    const {
      mainTheme: {backgroundColor, textColor},
    } = this.props;
    return (
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <CatList data={currentData} />
      </View>
    );
  }
}

const HomeWrapper = () => (
  <ThemeContext.Consumer>
    {({mainTheme}) => <Home mainTheme={mainTheme} />}
  </ThemeContext.Consumer>
);

export default HomeWrapper;
