import { NavigationContainer } from '@react-navigation/native';
import Bottomtab from '../components/Bottomtab';
import Exercise from '../Pages/Exercise';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export default function App() {
  return (
    
    <Stack.Navigator>
     <Stack.Screen name="Bottomtab" component={Bottomtab} options={{ headerShown: false }}  />
 

  </Stack.Navigator>
    

   
   
  );
}
