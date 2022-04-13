import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import TransactionScreen from "./screens/TransactionScreen";

const homeName = "Home";
const transactionName = "Transaction";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === transactionName) {
              iconName = focused ? "list" : "list-outline";
            } 
            // else if (rn === settingsName) {
            //   iconName = focused ? "settings" : "settings-outline";
            // }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })} 
      >
<Tab.Screen name={homeName} component={HomeScreen}/>
<Tab.Screen name={transactionName} component={TransactionScreen}/>
{/* <Tab.Screen name={settingsName} component={SettingsScreen}/> */}

</Tab.Navigator>
    </NavigationContainer>
  );
}
