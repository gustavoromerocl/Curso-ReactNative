import React, {Component} from 'react';
import {View, Button, FlatList} from 'react-native';
import Axios from 'axios';
import CatImage from '../components/CatImage';

export default class Home extends Component {
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

  render() {
    const {currentData} = this.state;

    console.log(currentData);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={this.fetchCat} title="LLamar a API CAT" />
        <FlatList
          data={currentData}
          keyExtractor={(item) => item.id}
          renderItem={({item: {url, width}}) => <CatImage catUrl={url} />}
        />
      </View>
    );
  }
}
