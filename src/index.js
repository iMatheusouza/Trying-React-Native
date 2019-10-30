import './config/ReactotronConfig';
import React, {Component} from 'react';
import Routes from './Routes';

/*importo o Reactotron para poder usar o console de uma melhor forma por esse aplicativo*/

/*Esse é o component que fica direto na Raiz da minha pasta principal, com isso
é mais fácil chama-lo par a Raiz do React-native renderiza-lo*/

/* Eu chamo a variável Routes, que foi criada no arquivo Routes, para que ela
me mostre o component que deve ser renderizado (checar Routes)*/
class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
