import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mostrar from '../src/screens/Mostrar';
import Datos from '../src/screens/Datos';

const Stack = createNativeStackNavigator();

export const StackNavigator=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Datos" component={ Datos } />
            <Stack.Screen name="Mostrar" component={ Mostrar } />
        </Stack.Navigator>
    )
}