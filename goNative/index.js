import './config/ReactotronConfig';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Todo from './components/Todo';

console.tron.log('Hello World');
class App extends Component {
  state = {
    usuario: 'Matheus',
    todos: [
      {id: 0, text: 'Fazer café'},
      {id: 1, text: 'Estudar o goNative'},
      {id: 2, text: 'Estudar Javascript'},
    ],
  };

  changeState = () => {
    this.setState({
      todos: [...this.state.todos, {id: Math.random(), text: 'Novo Todo'}],
    });
    2;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>{this.state.usuario}</Text>
        {this.state.todos.map(todo => {
          return <Todo key={todo.id} title={todo.text} />;
        })}

        <Button title="Adicionar novo" onPress={this.changeState} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C95B5E',
  },
  containerText: {
    color: '#FCA902',
    fontSize: 24,
  },
});

export default App;
