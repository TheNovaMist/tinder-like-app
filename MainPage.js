import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {
  MaterialCommunityIcons,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";

import Explore from "./Explore";
import Home from "./Home";
import Message from "./Message";
import Profile from "./Profile";
import Chat from "./ChatPage";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      activeColor="#fe5862"
      inactiveColor="#818392"
      barStyle={{ backgroundColor: "#ffffff" }}
      labeled={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "首页",

          tabBarIcon: ({ color }) => (
            <Fontisto name="fire" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="text-box-search-outline"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "个人资料" }}
        />
        {/* 导入时用了别名 */}
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
