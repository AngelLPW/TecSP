import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Mostrar = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Mostrar" component={Mostrar} />
    </Stack.Navigator>
   </NavigationContainer>
   
  )
}

export default Mostrar
