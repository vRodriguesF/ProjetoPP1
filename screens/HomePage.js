
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';



const Stack = createStackNavigator();


export default function HomePage({ navigation }) {
    const back = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png" };
    return (
        <ImageBackground  source={require('../assets/background.png')} style={styles.image} >
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('SignUp')}>
                <Text style={styles.loginText}>Cadastre-se</Text>
            </TouchableOpacity>               
        </View>
        </ImageBackground>
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin:40,
        borderRadius: 25,
      },
      loginText:{
        fontFamily: "cursive",
        fontWeight: "bold",
       },
       image:{
        width: '100%',
        height: '100%',
        flex: 1 
        
       },
       loginBtn: {  
        width: "80%",
        borderRadius: 25,
        height: 50,
        borderStyle: "solid",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "white",
      },
   
    })
  