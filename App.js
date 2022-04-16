import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoryScreen from './screens/CategoryScreen';
import OverviewMeals from './screens/OverviewMeals';
import DetailMealScreen from './screens/DetailMealScreen';
import FavotiteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Favorites" component={FavotiteScreen} />
    </Drawer.Navigator>
  );
}



export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#FF5C5C'},
            headerTintColor: '#e6e1e1',
            contentStyle: { backgroundColor: '#3f2f25' },
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
            headerBackTitleStyle: { fontSize: 15 }
          }}
        >
          <Stack.Screen 
            name="CategoriesOrRecipes" 
            component={DrawerNavigator} 
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="OverviewMeals" 
            component={OverviewMeals} 
          />
          <Stack.Screen 
            name="DetailMealScreen" 
            component={DetailMealScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
