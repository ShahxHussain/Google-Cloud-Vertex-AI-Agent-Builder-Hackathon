// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Exercise from '../Pages/Exercise';
import AskCoach from '../Pages/AskCoach';
import ImproveForm from '../Pages/ImproveForm';

const Tab = createBottomTabNavigator();

function BottomTab() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Exercise') {
            iconName = focused ? 'menu' : 'menu-outline';
          } else if (route.name === 'Ask Coach') {
            iconName = focused ? 'chatbubble-sharp' : 'chatbubble-outline';
          } else if (route.name === 'Improve Form') {
            iconName = focused ? 'aperture' : 'aperture-outline';
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 100, paddingBottom: 20 }, // Increase height and add padding
        tabBarLabelStyle: { paddingBottom: 10, fontWeight: '600', fontSize: 12 }, // Adjust the label position
      })}
      initialRouteName="Exercise"
    >
      <Tab.Screen name="Exercise" component={Exercise} />
      <Tab.Screen name="Ask Coach" component={AskCoach} options={{ headerShown: false }} />
      <Tab.Screen name="Improve Form" component={ImproveForm} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
export default BottomTab;