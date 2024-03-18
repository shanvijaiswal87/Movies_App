import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  Alert
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import plans from "../data/plan";
import { useRoute } from "@react-navigation/native";
// import { useStripe } from "@stripe/stripe-react-native";

const Homepg= () => {
  const [selected, setSelected] = useState([]);
  const route = useRoute();
  // const email = route.params.email;
  // const password = route.params.password;
  const [price, setPrice] = useState();
  const data = plans;
  // const stripe = useStripe();

  const subscribe = async() => {
    // Stripe subscription code here
    console.log("Subscribing to plan...");
  }
  // createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
  //   console.log(userCredentials);
  //   const user = userCredentials.user;
  //   console.log(user.email);
  // });

  return (
    <>

{selected.length > 0 ? (
         <Pressable
         style={{
           backgroundColor: "#E50914",
           padding: 10,
          //  marginBottom: 15,
           flexDirection: "row",
           alignItems: "center",
           justifyContent: "space-between",
           height:55,
         }}
       >
         <View>
           <Text style={{color:"white",fontSize:17,fontWeight:"600"}}>Selected Plan {selected}</Text>
         </View>
 
         <Pressable onPress={subscribe}>
           <Text style={{fontSize:17,fontWeight:"bold",color:"white"}}>PAY ₹{price}</Text>
         </Pressable>
       </Pressable>
      ) : (
        null
      )}

      <ScrollView style={{ marginTop: 0,
      paddingTop:10,
      backgroundColor:'#261e1e',
       }}>
        <View style={{ padding: 10, marginBottom: 85, }}>
          <Text style={{ fontSize: 18, fontWeight: "600",color:'white' }}>
            Choose the plan that suits you !
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600",color:'white' }}>
              Ad free experience
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600",color:'white' }}>
            Download videos to watch later
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="check" size={24} color="#E50914" />
            <Text
              style={{
                marginLeft: 6,
                fontSize: 16,
                fontWeight: "600",
                marginTop: 3,
                color:'white'
              }}
            >
              Cancel plans anytime
            </Text>
          </View>
          <View style={{ marginTop: 20 }} />
          {data.map((item, index) => (
            <Pressable
            key={index}
              onPress={() => {
                setSelected(item.name);
                setPrice(item.price);
              }}
              style={
                selected.includes(item.name)
                  ? {
                      height: 170,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 2,
                      padding: 15,
                      margin: 10,
                      color:'white'
                    }
                  : {
                      height: 170,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 0.5,
                      padding: 15,
                      margin: 10,
                      color:'white'
                    }
              }
              
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#E50914",
                    padding: 10,
                    width: 120,
                    borderRadius: 7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 16,
                      fontWeight: "600",
                      color:'white'
                    }}
                  >
                    {item.name}
                  </Text>
                </View>

                <Text style={{ fontSize: 18, fontWeight: "600" ,color:'white'}}>
                  Price: ₹{item.price}
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ color: "gray", fontSize: 15, fontWeight: "500",color:'white' }}
                  >
                    Video Quality : {item.videoQuality}
                  </Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginTop: 3 ,color:'white'}}
                  >
                    Resolution : {item.resolution}
                  </Text>
                </View>
                <Fontisto
                  style={{ marginRight: 6 }}
                  name="netflix"
                  size={30}
                  color="white"
                />
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 ,color:'white'}}>
                  Available On:{" "}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.devices.map((device) => (
                    <Entypo
                      style={{ marginRight: 6 }}
                      name={device.name}
                      size={25}
                      color="#E50914"
                    />
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      
    </>
  );
};

export default Homepg;

const styles = StyleSheet.create({});
