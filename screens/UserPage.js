
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Image } from 'react-native-elements';



const Stack = createStackNavigator();

export default function UserPage({ route }) {
    

    return (
      <ImageBackground  source={require('../assets/background.png')} style={styles.image} >
        <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Logged')}>
            <Text style={styles.loginText} >Voltar</Text>
        </TouchableOpacity>
        <View style={styles.container}>

            
            

          <View style={styles.backgroundTexto}>
         
          
          <View style={styles.descricao}>
          
              <Text>
                {route.params.descricao}
              </Text>
            
            </View> 
         
          </View>
          <View style={styles.entreContato}>
          
          
        </View>
       
        </View>
        <Text style={styles.nomeUsuario}>{route.params.nome}</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: "center",
      justifyContent: "center"}}>
          <Image
           source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png',
          }}
            style={styles.ImageIconStyleWhats}
            onPress={() => {
              Linking.openURL('https:wa.me/55' + route.params.celular)}}
          />
          <Image
           source={{
            uri: 'https://www.itabirito.mg.leg.br/imagens/insta.png/image',
          }}
            style={styles.ImageIconStyleInsta}
          />
          <Image
           source={{
            uri: 'https://logospng.org/download/linkedin/logo-linkedin-icon-1024.png',
          }}
            style={styles.ImageIconStyleLinkdn}    
          />
          </View>
          
        </ImageBackground>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"white",
      marginTop:80,
      margin:30,
      opacity:.8
      },
      descricao:{
        marginTop:30
      },
      nomeUsuario:{
        fontFamily: "cursive",
        fontSize:20,
        fontWeight: "bold",
        textAlign: "left",
        marginTop:0,
        marginLeft:30
        
      },
      backgroundTexto:{
       marginLeft:20,
       marginRight:12,
      },
      loginText:{
        fontFamily: "cursive",
        fontWeight: "bold",
       },
       ImageIconStyleWhats:{
        height:70,
        width:70,

       },
       ImageProducts:{
        height: 180,
        width:200,
        alignItems: "center",
        justifyContent: "center",
        marginTop:-50
      

       },
       ImageIconStyleInsta:{
        height:70,
        width:70,
        
       },
       ImageIconStyleLinkdn:{
        height:70,
        width:70,
        
       },
       textoContato:{
        
       },
       entreContato:{
        marginTop:"50%"
       },
       image:{  
        flex: 1,
        justifyContent: "center"
       },
       loginBtn: {  
        width: "30%",
        borderRadius: 25,
        height: 30,
        borderStyle: "solid",
        borderWidth: 2,
        alignItems: "left",
        justifyContent: "left",
        textAlign: "center",
        marginTop: 10,
        backgroundColor: "white",
      },
   
    })
  