import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity} from 'react-native';
import { shuffle } from 'lodash';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [moviesData, setMoviesData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchHomeData = async () => {
      const url = 'https://movies-p.rapidapi.com/home';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '*****************',
          'X-RapidAPI-Host': '****************'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const movies = data.map(section => ({
          title: section.title,
          posters: shuffle(section.movies.map(movie => ({
            id: movie._id,
            title: movie.title,
            poster: movie.poster_path,
            date:movie.release_date
          })))
        }));
        setMoviesData(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHomeData();
  }, []);

  const handleMoviePress = (movieId) => {
    
    navigation.navigate('MovieDetails', { movieId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={moviesData}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            {/* <Text style={styles.sectionTitle}>{item.title}</Text> */}
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <FlatList
              data={item.posters}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleMoviePress(item.id)}>

                <View style={styles.movieContainer}>
                  <Image source={{ uri: item.poster }} style={styles.poster}
                    />
                 {/* <Text style={styles.sectionTitle}>{item.id}</Text> */}
                </View>
                    </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    
  },
  sectionContainer: {
    marginBottom: 5
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
  },
  movieContainer: {
    marginRight: 10
  },
  poster: {
    width: 130,
    height: 200,
    margin: 5,
    justifyContent:'space-around',
    resizeMode: 'cover',
    borderRadius:9,
  },
  movieTitle: {
    marginTop: 5,
    textAlign: 'center',
    
    
  }
});

export default HomeScreen;
