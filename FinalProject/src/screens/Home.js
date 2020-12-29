import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: true,
    };
  }

  render() {
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}
