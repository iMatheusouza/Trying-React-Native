import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import api from '../services/api';

class Details extends PureComponent {
  static navigationOption = {
    title: 'Details',
  };
  state = {
    counter: 0,
  };

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    // const pickData = await api.get('/products')

    // const apiData = pickData.data.docs

    // console.log('details', apiData)

    this.setState({counter: this.state.counter + 1});
  };

  render() {
    return (
      <View style={styledPage.container}>
        <Text style={styledPage.text}>{this.state.counter}</Text>

        {/* <Button color="yellow" title="go back" onPress={() => {
          this.props.navigation.goBack()
        }}/> */}

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('TitlePage');
          }}>
          <Text>Go Title</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styledPage = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  text: {
    fontSize: 28,
    color: 'yellow',
    fontWeight: 'bold',
  },
});

export default Details;
