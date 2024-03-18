import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Trending from "../components/Trending";
import MovieRows from "../components/MovieRows";

const MoviesNSeries = () => {
  return (
    <ScrollView style={{ backgroundColor: "#261e1e" }}>
      <View style={{ paddingBottom: 10, marginBottom: 85 }}>
        <Header />
        <Trending />
        <MovieRows />
      </View>
    </ScrollView>
  );
};

export default MoviesNSeries;
