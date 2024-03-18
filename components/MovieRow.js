// import React, { useEffect, useState } from "react";
// import { ScrollView, StyleSheet, Text, View, Pressable, Image } from "react-native";

// const MovieRow = ({ title, url }) => {
//   console.log(url);
//   const API_KEY = "588691f9";
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setMovies(data.Search);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, [url]); // Added url as a dependency to useEffect

//   return (
//     <View>
//       <Text style={{ fontSize: 19, fontWeight: "bold", color: "white" }}>{title}</Text>
//       <ScrollView horizontal showsVerticalScrollIndicator={false}>
//         {movies.map((movie, id) => (
//           <Pressable key={id} onPress={() => console.log("Pressed", movie.Title)}>
//             <Image
//               style={{
//                 width: 105,
//                 margin: 10,
//                 height: 152,
//                 borderRadius: 6,
//                 resizeMode: "cover",
//               }}
//               source={{
//                 uri: movie.Poster, // Corrected image URI
//               }}
//             />
//           </Pressable>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default MovieRow;

// const styles = StyleSheet.create({});
