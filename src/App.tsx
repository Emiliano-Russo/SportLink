import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './screens/Home';
import {Contacts} from './screens/Contacts';
import {EventCreator} from './screens/event/EventCreator';
import {BasicDataEvent} from './screens/event/BasicDataEvent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ConfirmationTimesScreen} from './screens/event/ConfirmationTimesScreen';
import {SportEvent} from './interfaces/event';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export type PlanningStackParamList = {
  EventCreator: undefined;
  BasicDataEvent: undefined;
  ConfirmationTimesScreen: {sportEvent: SportEvent};
};

// Creación del Stack Navigator para Planificación
const PlanningStack = createStackNavigator<PlanningStackParamList>();

const PlanningStackScreen = () => {
  return (
    <PlanningStack.Navigator>
      <PlanningStack.Screen
        name="EventCreator"
        component={EventCreator}
        options={{title: 'Planificación'}}
      />
      <PlanningStack.Screen
        name="BasicDataEvent"
        component={BasicDataEvent}
        options={{title: 'Datos del Partido'}}
      />
      <PlanningStack.Screen
        name="ConfirmationTimesScreen"
        component={ConfirmationTimesScreen}
        options={{title: 'Jugadores'}}
      />
    </PlanningStack.Navigator>
  );
};

// Creación del Tab Navigator principal
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Planificación') {
                iconName = 'calendar-alt'; // Ícono para "Planificación"
              } else if (route.name === 'Inicio') {
                iconName = 'futbol'; // Ícono de balón de fútbol para "Inicio"
              } else if (route.name === 'Contactos') {
                iconName = 'address-book'; // Ícono de contactos
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Planificación" component={PlanningStackScreen} />
          <Tab.Screen name="Inicio" component={Home} />
          <Tab.Screen name="Contactos" component={Contacts} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
