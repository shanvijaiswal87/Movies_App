import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Homescreen");
    },899);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        
        <ActivityIndicator size="large" color="red" />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});