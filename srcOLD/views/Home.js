import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import api from '../services/api';

/*Defino meu componente que vai ser renderizado*/

/*navigationOptions é um nome reservado para o react-navigation e com isso eu consigo mudar o título
do meu header para 'home', header esse q vai ser criado ao começarmos a usar o react-navigation-stack
*/

/*meu state é nada menos que um objeto, que fica sendo ouvido o tempo todo, para quando for mudado
renderizar novamente o component*/

/*componentDidMount é uma função reservada do React, ela diz que o conteúdo só começará a ser computado quando o
render do component for renderizado, então dentro dessa funcionalidade chamamos outra função que queremos
utilizar, no nosso caso loadProducts  */

/*a função loadProducts recebe dados de uma api, e armazena esses dados numa variável response,
com isso, criamos outra variável docs, e entramos nos dados fornecidos pelo response com um .data
então entramos com o this.setState que tem a função de mudar algo que já foi definido no nosso state,
pegamos então o que queremos mudar no state, e definimos o novo valor. Nesse caso o novo valor vem dos
dados da api que foi guardado na variável docs, então acessamos um dado específico e jogamos ele no state  */

/*Agora no nosso método render, o que vai aparecer em tela para gente, nós chamamos o nosso estado,
para que o mesmo apareça em tela com o código {this.state.title} pois queremos que apareça o title,
não qualquer outro objeto*/

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    docs: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const {docs} = response.data;
    // const docs = response.data.docs --> outra forma de escrever a mesma coisa, quando recebemos os dados da api,
    // o primeiro dado também se chama docs, assim como a nossa variável, com isso ao colocarmos entre chaves, como acima
    // dizemos para o React que estamos chamando a variável docs, que vai entrar na API, pegar os DADOS e entrar na 'pasta'
    // 'docs'

    this.setState({docs});
    console.log('aqui vai api', docs);
  };

  renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>
        {this.state.title}
        </Text> */}

        {
          //data passa a variável do state dos dados que queremos mostrar
          //keyExtractor, o react pede por padrão, quando listar itens em tela, cada item ter uma key única
          //renderItem é um parametro para renderizar nossos itens, nesse caso eu crio uma função de mesmo nome,
          //para que não fique muito embolado, e dentro dessa nossa função coloco os itens que quero renderizar
        }

        {/* <FlatList
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        /> */}

        <Button
          color="purple"
          title="go to Details"
          onPress={() => {
            this.props.navigation.navigate('DetailsPage');
          }}
        />
      </View>
    );
  }
}
//Ao colocar as rotas definidas no Routes
//é possivel chamar o método 'navigation' para chamar a página desejada, e depois chamar
//o navigate para mostrar qual página é a desejada.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 28,
    color: 'purple',
    fontWeight: 'bold',
  },
});

export default Home;
