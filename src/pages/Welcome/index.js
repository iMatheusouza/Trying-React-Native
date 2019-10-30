import '../../config/ReactotronConfig';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import styles from './styles';
import api from '../../services/api';

class Welcome extends Component {
  state = {
    username: '',
  };

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem(`@Githuber ${username}`);
  };

  signIn = async () => {
    const username = this.state.username;

    try {
      await this.checkUserExists(username);
    } catch (error) {
      console.tron.log('Usuário inexistente.');
    }
  };

  render() {
    const username = this.state.username;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>
          Para continuar, digite seu usuário do Github
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            value={username}
            onChangeText={text => this.setState({username: text})}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
