import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // for screen transaction
import FeatherIcon from 'react-native-vector-icons/Feather'
import Catalog from './pages/Catalog'
import Header from "./components/Header";
import Cart from "./pages/Cart";

export type RootStackParamList = {
  Cart: undefined;
  Catalog: undefined;
}

const Stack = createStackNavigator<RootStackParamList>()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: '#313746' }
      }}
      >
        <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Header/>,
        }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
            headerBackImage: () => (
              <FeatherIcon name="chevron-left" size={24} color="#f3f9ff" />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}