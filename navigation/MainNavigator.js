import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ProductOverviewScreen from '../screens/shops/ProductOverviewScreen';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === "android" ? 'white' : Colors.primaryColor
            }}>
                <Stack.Screen name="ProductOverviewScreen" component={ProductOverviewScreen} options={{
                    title: "Product Details"
                }
                } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;