import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import firebase from 'firebase/app';
import { auth } from '../config/firebase';
import { getAuth, signOut } from "firebase/auth";
import Settings from "./Settings";





const Profile = () => {

    const navigation = useNavigation();

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("Logout success");
            navigation.navigate('Login');
        }).catch((error) => {
            console.error('Error logging out:', error.message);
        }); 
    };
    




    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            // headerRight: () => (
                
            // ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>

<Pressable
         style={{
          backgroundColor: 'white', // Change the color as desired
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',

    height: 70,
    width: '100%',
    marginBottom:620,
    borderWidth:2,
     borderBottomColor:'transparent',
     borderBottomLeftRadius:2,
     borderBottomLeftRadius:3,
    elevation: 5,
   
         }}
       >
         <View>
           <Text style={{color:"black",fontSize:22,fontWeight:"700",
          alignItems:'center',
          justifyContent:'center',
          marginLeft: 120
          }}>Settings</Text>

         </View>
         <TouchableOpacity
                onPress={handleLogout} // Call the logout function onPress
                style={styles.logoutButton} // Apply your button styles
            >
                <AntDesign name="logout" size={24} color={colors.gray} style={{marginLeft: 120}} />
            </TouchableOpacity>
        </Pressable>
        
            <TouchableOpacity
               
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            
        </View>
    );
    };

    export default Profile;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#fff",
        },
        chatButton: {
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        }
    });