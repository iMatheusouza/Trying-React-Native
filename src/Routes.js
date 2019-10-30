import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';

/* A primeira coisa q faço nas rotas é importar os components que vou usar de acordo com suas pastas*/

/* após isso eu crio uma variável que vai segurar um modo algum moto do reactNavigation, nesse caso
ela vai segurar o switchNavigator, onde o usuário será conduzido para a tela de acordo com as ações tomadas*/

/* essa variável deve conter o métododo navigator que desejo criar, com um objeto dentro, esse objeto contém
vários outros objetos, que podem ser tanto quais telas aparecerão para o usuário, quanto estilização padrão
da navegação.*/

/* as telas que eu devo chamar são os componentes antes importados*/
const AppNavigator = createSwitchNavigator(
  {
    Welcome: Welcome,
    Repositories: Repositories,
  },
  {
    initialRouteName: 'Welcome',
  },
);

/* Agora crio uma variável (como falei no arquivo index) que contem o CreateAppContainer, método esse
que não tem nenhum feedback visual, porém ele é o responsável por armazenar todos os métodos de navegação
que criarmos*/

const Routes = createAppContainer(AppNavigator);

export default Routes;
