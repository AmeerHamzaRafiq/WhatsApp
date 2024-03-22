import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Chats from '../views/Chats'
import Status from '../views/Status'
import Calls from '../views/Calls'

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Whats app" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Status" component={Status} />
            <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
    );
}

export default MainNavigator