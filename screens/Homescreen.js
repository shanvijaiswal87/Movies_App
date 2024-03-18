import React from "react";
import { View, Text, Image, SafeAreaView, StatusBar } from "react-native";
import { BellAlertIcon, MapPinIcon } from "react-native-heroicons/solid";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { NavigationContainer } from "@react-navigation/native";
// import {themeColors} from '../theme';
import Homepg from "./Homepg";
import Profile from "./Profile";
import MoviesNSeries from "./MoviesNSeries";
import { useTheme } from "react-native-paper";
// import { HomeFilled, StarTwoTone, UserOutlined } from '@ant-design/icons';
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();
const menuTab = createMaterialTopTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,

  tabBarStyle: {
    backgroundColor: 'rgba(33, 29, 29, 0.78)',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    position: "absolute",
    bottom: 5,
    right: 15,
    left: 15,
    elevation: 0,
    height: 54,
    
  },
  // tabBarIndicatorStyle: {
  //   borderBottomColor: "red",
  //   borderBottomWidth: 2,

  // },
  tabBarIndicatorStyle: {
    display: 'none', // Remove tab bar indicator
  },

};

function Homescreen() {
  return (
    <menuTab.Navigator screenOptions={screenOptions}>
      <menuTab.Screen
        name="MoviesNSeries"
        title="MoviesNSeries"
        component={MoviesNSeries}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5
                  name="list-alt"
                  size={24}
                  color={focused ? "#E50914" : "#fff"}
                />
              </View>
            );
          },
        }}
      
      />
      <menuTab.Screen
        name="Home"
        component={Homepg}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "#E50914" : "#fff"}
                />
                {/* <Text style={{fonSize: 12, color: "#16247d"}}>HOME</Text> */}
              </View>
            );
          },
        }}
      />
    </menuTab.Navigator>
  );
}

export default Homescreen;
