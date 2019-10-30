import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import Details from '../views/Details';
import Home from '../views/Home';
import Title from '../views/Titles';

//createStackNavigator nome reservado do react navigation, para criar uma navegação stack
const AppNavigator = createStackNavigator(
  {
    HomePage: {
      screen: Home,
    },
    DetailsPage: {
      screen: Details,
    },
    TitlePage: {
      screen: Title,
    },
  },
  {
    //initialRouteName e vários outros são nomes reservados, pesquisar sempre
    initialRouteName: 'HomePage',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'yellow',
      },
      headerTintColor: 'steelblue',
      HeaderTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

//createAppContainer nome reservado do react navigation
const Router = createAppContainer(AppNavigator);

export default Router;
