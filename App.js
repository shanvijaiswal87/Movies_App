import React, { useState, createContext, useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Chat from "./screens/Chat";
import Login from "./screens/Login";

import Signup from "./screens/Signup";
import { View, ActivityIndicator } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Homescreen from "./screens/Homescreen";
import Loading from "./screens/Loading";
import Homepg from "./screens/Homepg";
 import MovieDetails from "./screens/MovieDetails";


const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function AppStack() {
  return (

    <Stack.Navigator
      defaultScreenOptions={Loading}
      screenOptions={ { headerShown: false }}
      >
       <Stack.Screen name='Load' component={Loading} />
       {/* <Stack.Screen name='MovieDetails' component={MovieDetails} /> */}
      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          headerTitleAlign: "center",
        }}
        />
      <Stack.Screen name='MovieDetails' component={MovieDetails} />
     
    </Stack.Navigator>
       
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      defaultScreenOptions={Login}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
