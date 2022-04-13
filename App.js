import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import OverviewMeals from './screens/OverviewMeals';
import DetailMealScreen from './screens/DetailMealScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
            component={CategoryScreen} 
            options={{
              title: 'all categories'
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
