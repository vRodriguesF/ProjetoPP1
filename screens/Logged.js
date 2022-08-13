
import * as React  from 'react';
import { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem, Avatar, Icon, Header } from 'react-native-elements';
import { Button } from 'react-native-elements';
import axios from 'axios';


const Stack = createStackNavigator();


/***axios.get('api', {
    auth: { 
       username: 'janedoe', 
       password: 's00pers3cret' 
    }
 }) ***/
export default function Logged({ route }) {

  const navigation = useNavigation();
  const [getData, setData] = useState([]);


 
  useEffect(()=>{
        
    async function resgatarDados(){
        const result = await axios(
            'http://localhost:8080/api/v1/artistas',
          );
          setData(result.data);
    }
    resgatarDados();
})

      
    return (

      <ImageBackground  source={require('../assets/background.png')} style={styles.image} >
            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('HomePage')}>
            <Text style={styles.loginText} >Voltar</Text>
        </TouchableOpacity>
            <View style={styles.container}>
                
                {
                    getData.map((l, i) => (
                        <ListItem style={{marginBottom:40}} onPress={()=>navigation.navigate('UserPage',{ 
                               nome: l.nomeCompleto,
                               celular:l.celular,
                               descricao:l.urlFotoPerfil,
                               id:l.id,
                               })} key={i} bottomDivider> 
                        <ListItem.Content style={styles.listaUsuarios}>
                        
                        <Avatar source={{uri: 'http://espacokinder.com.br/site/images/galeria.png'}} style={styles.avatar} /> 
                           
                        <View style={styles.caixaDescricao}>
                        <Text style={styles.nomeUsuario}>{l.nomeCompleto}</Text>
                        <Text>________________________________________________</Text>             
                        <Text style={styles.descricaoUsuario}>{l.urlFotoPerfil}</Text>  
                        </View>
                        </ListItem.Content>         
                    </ListItem>
                    ))
                }
               
            </View>
        </ImageBackground>

        
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:30
      },
      loginText:{
        fontFamily: "cursive",
        fontWeight: "bold",
       },
       image:{
        flex: 1,
        justifyContent: "center"
       },
     
      avatar:{
          height:"60% ",
          width:"100%",
          marginTop:-20
          
         
      },
      listaUsuarios:{
        height:220,
        width:100,
        
        
        
       
      },
      nomeUsuario: {
        textAlign:"left",
        fontFamily: "cursive",
        fontWeight: "bold",
      },
      caixaDescricao:{
        width:280
      },
      descricaoUsuario: {
        fontFamily: "cursive",
        fontWeight: "bold",
        
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
  