import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  useWindowDimensions
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
// import { MovieItems } from "../Context";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";






const Header = () => {
  // const { profile, setProfile } = useContext(MovieItems);
  const navigation = useNavigation();
  const [posterURI, setPosterURI] = useState('');

  useEffect(() => {
    const fetchRandomPoster = async () => {
      const url = 'https://movies-api14.p.rapidapi.com/movies';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '*****************',
          'X-RapidAPI-Host': '*******************'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const posters = data.movies.map(movie => movie.poster_path);
        const randomPoster = posters[Math.floor(Math.random() * posters.length)];
        setPosterURI(randomPoster);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomPoster();
  }, []);

  const { width } = useWindowDimensions();
  const ht = width * 1.25; 

  return (
    <SafeAreaView>
      <ImageBackground
        style={{ width: "100%", height:ht, position: "relative",borderBottomEndRadius:10, backgroundColor: '#f0f0f0' }}
        source={{
          uri: posterURI,
        }}
      >
              <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            alignItems:'center',
          }}
        >
          <Image
            style={{ height: 50, width: 120 }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              style={{ marginRight: 10 }}
              name="search1"
              size={24}
              color="white"
            />
            <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
                borderRadius: 5,
              }}
              // source={{ uri: profile.image }}
            />
            </Pressable>
          
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            margin: 20,
            marginLeft:30,
            
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            TV shows
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
              marginHorizontal: 20,
            }}
          >
            Movies
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Categories
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 15,
        }}
      >
        <View>
          <AntDesign
            style={{ textAlign: "center" }}
            name="plus"
            size={24}
            color="white"
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white",marginTop:3 }}>
            My List
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            width:120,
            justifyContent:"center",
            alignItems:"center",
            borderRadius: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo name="controller-play" size={24} color="black" 
            onPress={() => navigation.navigate('Home')}/>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
            Play
          </Text>
        </View>

        <View>
          <AntDesign
            style={{ textAlign: "center" }}
            name="infocirlceo"
            size={24}
            color="white"
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white",marginTop:3 }}>
            Info
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
