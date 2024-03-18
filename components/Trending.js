import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, Image, ScrollView } from "react-native";

const TrendingComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      const url = 'https://movies-api.rapidapi.com/movies';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '************************',
          'X-RapidAPI-Host': '**********************'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        
       
        const shuffledMovies = shuffleArray(data.movies);
       
        const top10Movies = shuffledMovies.slice(0, 10);
        
        setMovies(top10Movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomMovies();
  }, []);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {movies.map((movie, index) => (
          <Pressable key={index} style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 85,
                color: "white",
                fontWeight: "bold",
                position: "absolute",
                zIndex: 5,
                top: 55,
                right: 90,
                marginTop: 20,
              }}
            >
              {index + 1}
            </Text>

            <Image
              key={index}
              style={{
                width: 115,
                margin: 10,
                height: 162,
                borderRadius: 6,
                resizeMode: "cover",
              }}
              source={{
                uri: movie.poster_path, // Update source URI to movie poster
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrendingComponent;

const styles = StyleSheet.create({});
