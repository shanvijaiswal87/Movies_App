// import React ,{useEffect,useState} from 'react';
// import {
//   ActivityIndicator,
//     View,
//     Text,
//     StyleSheet,
//     ScrollView,
//     ImageBackground
// } from 'react-native';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { LinearGradient } from 'expo-linear-gradient';

// const postr = require("../assets/testImg.jpg");

// const MovieDetails = ({ route }) => {




//   const [movieDetails, setMovieDetails] = useState({});
 
//   const { movieId } = route.params

//   useEffect(() => {
//     const fetchHomeData = async () => {
//       const url = 'https://movies-api14.p.rapidapi.com/home';
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': 'b676e72403msh47ad6be776c4416p128de0jsnf0f889e3cd92',
//           'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await fetch(url, options);
//         const data = await response.json();

//         // Iterate over each section
//         for (const section of data) {
//           // Check if the section contains the desired movie
//           const movie = section.movies.find(movie => movie._id === movieId);
//           if (movie) {
//             // If found, set the movie details and break the loop
//             setMovieDetails({
//               id: movie._id,
//               title: movie.title,
//               poster: movie.poster_path,
//               date: movie.release_date,
//               desc:movie.overview
//             });
//             break;
//           }
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchHomeData();
//   }, []);

//   if (!movieDetails || Object.keys(movieDetails).length === 0) {
//     return (
//       <View style={styles.loadingContainer}>
//          <View
//       style={{
//         flex: 1,
//         backgroundColor: "#261e1e",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <View>
        
//         <ActivityIndicator size="large" color="red" />
//       </View>
//     </View>
//       </View>
//     );
//   }















//     function generateRandomRating() {
//         const rating = Math.floor(Math.random() * 41) / 10 + 1;;
//         return rating.toFixed(1);
//     }

//     const ratingCode = generateRandomRating();

//     return (
//         <View style={{ flex: 1 }}>
//             <ScrollView style={styles.container}>
//                 <View style={{ justifyContent: "center", alignItems: "center" }}>
                  
//                     <ImageBackground style={styles.thumbnail}
//                         // source={{uri:movieDetails.poster}}>
//                          source={{ uri: 'https://i.pinimg.com/736x/44/29/f0/4429f02128255f000ff0f11e03fc2cb2.jpg' }}> 
//                         <View style={styles.nameContainer} >
//                             <Text style={styles.title}>
//                                 {/* {movieDetails.title} */}
//                                 Lorem ipsum
//                             </Text>
//                         </View>
//                     </ImageBackground>
//                 </View>
//                 <View style={styles.descContainer}>
//                   {/* <View style={styles.sub}> */}

//                     <View style={styles.subL}>
                        
//                         <StarRating rating={ratingCode} style={styles.myStarStyle} />
//                       <Text style={styles.txt}>
//                         Lorem ipsum
//                       </Text>
//                     </View>
//                     <View style={styles.subR}>
                    
//                     <View style={styles.subR1}>
                        
//                        <FontAwesome name='language'size={24} color="#E50914" />
//                         <Text style={styles.text}>
//                         {/* {movieDetails.date} */}
//                             Lorem ipsum
//                         </Text>
//                         </View>
//                         <View style={styles.subR2}>
//                         <FontAwesome name='language'size={24} color="#E50914" />
//                         <Text style={styles.text}>
                            
//                             English
//                         </Text>
//                         </View>
//                   </View>
                  
//                     <View style={styles.desc}>
//                         <Text style={styles.text}>
//                             {/* {movieDetails.desc} */}
//                             Lorem ipsum Lorem ipsum
//                             Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
//                             Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
//                         </Text>
//                     </View>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// const StarRating = ({ rating, style }) => {
//     const integerPart = Math.floor(rating); // Integer part of the rating
//     const decimalPart = rating - integerPart; // Decimal part of the rating
//     const filledStars = integerPart; // Number of filled stars
//     let remainingStars = 5 - integerPart; // Number of empty stars

//     // Check if there is a decimal part and if there are remaining stars
//     if (decimalPart > 0 && remainingStars > 0) {
//         // Add one filled star for the decimal part
//         remainingStars--;
//     }

//     return (
//         <View style={[styles.starContainer, style]}>
//             {Array.from({ length: filledStars }, (_, index) => (
//                 <FontAwesome key={index} name="star" size={24} color="#E50914" />
//             ))}
//             {decimalPart > 0 && (
//                 <FontAwesome name="star-half-full" size={24} color="#E50914" />
//             )}
//             {Array.from({ length: remainingStars }, (_, index) => (
//                 <FontAwesome key={index + filledStars} name="star" size={24} color="black" />
//             ))}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#202328'
//     },
//     nameContainer: {
//         backgroundColor: 'transparent',
//     },
//     thumbnail: {
//         width: 400,
//         height: 460,
//         justifyContent: "flex-end",
//     },
    
//     sub:{
//  flexDirection: 'row', 
 
//       justifyContent: 'space-between',

   
//     },
//     subL: {
       
//         alignItems: "flexStart",
//         marginHorizontal: 5,
//         marginTop:10,
//     },
//     subR:{
//       alignItems: "flex-end",
//       justifyContent:'flex-end',
//         marginHorizontal: 5
//     },
//     subR1: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginHorizontal: 5,
//   },
//   subR2: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginHorizontal: 5,
//       marginTop: 10,
//   },
//   descContainer: {
    
//       justifyContent: 'space-between',
//       marginTop: 10,
//       paddingHorizontal: 20,
     
//   },
//     desc: {
//         marginVertical: 10
//     },
//     text: {
      
//         color: '#b3b3b3',
//         fontSize: 18,
//         margin: 5
//     },
//     txt:{
//       marginTop:15,
//       color: '#b3b3b3',
//       fontSize: 20,
//       fontWeight:'700',
//       margin: 5
//     },
//     title: {
//         color: 'white',
//         fontSize: 35,
//         marginHorizontal: 10,
//         paddingVertical: 20
//     },
//     myStarStyle: {
//         color: 'yellow',
//         backgroundColor: 'transparent',
//         textShadowColor: 'black',
//         textShadowOffset: { width: 1, height: 1 },
//         textShadowRadius: 2,
//         marginTop:10,
//     },
//     starContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
// });

// export default MovieDetails;

import React, { useState, useEffect } from 'react';
import { 
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons'; 
// import { DataStore } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
// import HomeScreen from './Homescreen';

const MovieDetails = ({route}) => {

  const [isLiked, setIsLiked] = useState(false);
  const [add, setAdded] = useState(false);

  const handlePress = () => {
    setIsLiked(!isLiked);
  };
   const handleAdd =() =>{
setAdded(!add);
   }

   const navigation = useNavigation(); // Get navigation object from the hook

  const onGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };


  const [movieDetails, setMovieDetails] = useState({});
 
    const { movieId } = route.params
  
    useEffect(() => {
      const fetchHomeData = async () => {
        const url = 'https://movies-api14.p.rapidapi.com/home';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'b676e72403msh47ad6be776c4416p128de0jsnf0f889e3cd92',
            'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
          }
        };
  
        try {
          const response = await fetch(url, options);
          const data = await response.json();
  
          // Iterate over each section
          for (const section of data) {
            // Check if the section contains the desired movie
            const movie = section.movies.find(movie => movie._id === movieId);
            if (movie) {
              // If found, set the movie details and break the loop
              setMovieDetails({
                id: movie._id,
                title: movie.title,
                poster: movie.poster_path,
                date: movie.release_date,
                desc:movie.overview,
                genres: movie.genres
              });
              break;
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchHomeData();
    }, []);
  
    if (!movieDetails || Object.keys(movieDetails).length === 0) {
      return (
        <View style={styles.loadingContainer}>
           <View
        style={{
          flex: 1,
          backgroundColor: "#261e1e",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <View>
          
          <ActivityIndicator size="large" color="red" />
        </View>
      </View>
        </View>
      );
    }
  
  
  
  
  
  
  
  




























    return (
        <ScrollView style={{ backgroundColor: "#261e1e" }}>
            <SafeAreaView>
                   <View>
                   <TouchableOpacity onPress={onGoBack} style={styles.goBackButton}>
        <FontAwesome name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
                      <ImageBackground style={styles.thumbnail}
//                         // source={{uri:movieDetails.poster}}>
                          source={{ uri: movieDetails.poster }}/>
                          <View style={{ padding: 12 }}>
                        <Text style={styles.title}>
                            {movieDetails.title}
                            {/* Lorem ipsum */}
                        </Text>

                        <Text style={{ marginVertical: 10,color:'#fff', 
                       marginBottom:20,justifyContent:'space-between',
                       
                       }}>
                           
                            
                            {movieDetails.genres && movieDetails.genres.map((genre, index) => (
        <TouchableOpacity key={index} style={[styles.genre, styles.button]}>
            <Text style={styles.buttonText}>{genre}
          </Text>
        </TouchableOpacity>
    ))}

                        </Text>

                        <View style={{ flexDirection: 'row',
                      justifyContent:'space-between',marginBottom:15, }}>
                            <Text style={styles.match}>98% match</Text>
                            <View style={{flexDirection: 'row',gap:-5,}}>
                            <FontAwesome name='calendar' size={15} style={{marginRight:10,
                            color:'#fff',}}/>
                            <Text style={styles.year}>                              
                                {movieDetails.date}
                                {/* Lorem ipsum */}
                            </Text>
                            </View>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            
                        </View>

                        {/* Play Button */}
                        <Pressable onPress={() => { console.warn('Plage')}} style={styles.playButton}>
                            <Text style={styles.playButtonText}>
                                <Entypo name="controller-play" size={16} color="black" />
                                Play
                            </Text>
                        </Pressable>

                        {/* Download Button */}
                        <Pressable onPress={() => { console.warn('Download')}} style={styles.downloadButton}>
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={16} color="white" />
                                {' '}
                                Download
                            </Text>
                        </Pressable>

                      

                        <Text style={styles.year}>
                            {/* {movie.cast} */}
                            {movieDetails.desc}
                        </Text>
                        <Text style={styles.year}>Creator:
                            {/* {movie.creator} */}
                            Lorem ipsum
                        </Text>
                    
                        {/* Row with icon buttons */}
                        <View style={{ flexDirection: 'row', marginTop: 20,justifyContent:'space-between' }}>
                        <TouchableOpacity onPress={handleAdd}>
          <View style={{ alignItems: 'center', marginHorizontal: 15 }}>
            {add ? (
              <>
                <AntDesign name="plus" size={24} color="#E50914" />
                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Remove</Text>
              </>
            ) : (
              <>
                <AntDesign name="plus" size={24} color={'white'} />
                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Add to list</Text>
              </>
            )}
          </View>
        </TouchableOpacity>

                           <View style={{  justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ alignItems: 'center', marginHorizontal: 15 }}>
          {isLiked ? (
            <MaterialIcons name="thumb-up-alt" size={24} color="red" />
          ) : (
            <MaterialIcons name="thumb-up-off-alt" size={24} color="white" />
          )}
          <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
        </View>
      </TouchableOpacity>
    </View>

                            <View style={{ alignItems: 'center', marginHorizontal: 22 }}>
                                <FontAwesome name="send-o" size={24} color="white" />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white' }}></View>

                       
                    </View>
                    </View>
                    
                </SafeAreaView>
                
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#261e1e",
  },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
    },
    goBackButton: {
      position: 'absolute',
      top: 20, // Adjust this value to position the button
      left: 20, // Adjust this value to position the button
      zIndex: 1, // Ensure the button is above the image
    },
    thumbnail: {
              width: 400,
              height: 460,
              justifyContent: "flex-end",
          },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#fff',
        marginBottom:4,
    },
    match: {
        color: '#59d467',
        fontWeight: 'bold',
        marginRight: 5,
    },
    year: {
    
    //  marginLeft:10,
    //     color: '#757575',
    //     marginRight: 5,

    color:'#fff',
   
    
    },
    genre:{
      backgroundColor:'gray',
      marginLeft: 5,

    },
    ageContainer: {
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,
        marginRight: 5,
    },
    age: {
        color: 'black',
        fontWeight: 'bold',
    },

    // Button
    playButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5,
    },
    playButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    downloadButton: {
        backgroundColor: '#E50914',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5,
        marginBottom:20,
    },
    downloadButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
 
    },
    button: {
        backgroundColor: '#262621', // Example button background color
        borderRadius: 10, // Example border radius for rounded corners
        paddingHorizontal: 10, // Example padding for inner content
        margin: 8, // Example margin for spacing between buttons
        borderWidth:1,
        borderColor:'gray',
        
    },
    buttonText: {
        color: '#fff', // Example text color for button text
        fontSize: 12, // Example font size for button text
        fontWeight: '800', // Example font weight for button text
        
    },
    buttonSpacing: {
      marginLeft: 10, // Example spacing between buttons
  },
});

export default MovieDetails;
