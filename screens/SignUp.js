
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput, ImageBackground } from 'react-native';
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { Header } from 'react-native-elements';
import axios from 'axios';
import { Button } from 'react-native-elements';




export default function SignUp({ navigation }) {

    
    const back = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png" };

    
    const [getNomeCompleto,setNomeCompleto] = useState();
    const [getDescricao,setDescricao] = useState();
    const [getCelular,setCelular] = useState();
    const [getEmail, setEmail] = useState();
    const [getSenha, setSenha] = useState();
    const [getId, setId] = useState();
    const [getMensagem, setMensagem] = useState()

    

    async function inserirDados(){
        
      axios.post('http://localhost:8080/api/v1/criaArtista', {
          nomeCompleto: getNomeCompleto,
          celular: getCelular,
          email: getEmail,
          senha: getSenha,
          urlFotoPerfil: getDescricao
        },{ auth: {
          username: getEmail,
          password: getSenha
        }})
        .then(function (response) {
          setNomeCompleto('');
          setEmail('');
          setCelular('');
          setSenha('');
          setId('');
          setDescricao('');
          navigation.navigate('Login')      
     
          showMessage({
              message: "Registro Cadastrado com sucesso",
              type: "success",
            }); 
          console.log(response);
          setMensagem('Cadastro efetuado com sucesso!')
        })
        .catch(function (error) {
          console.log(error);
          setMensagem('E-mail já cadastrado!')
        });     
      
    }
   
    
    const Stack = createStackNavigator();
    return (
      <ImageBackground  source={require('../assets/background.png')} style={styles.image} >
        
        <View style={styles.container}>
        <Text style={styles.mensagemCadastrado}>{getMensagem}</Text>
    
        <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholderTextColor="#545455"
                TextInput placeholder="Nome Completo"
                maxLength='50'
                onChangeText={nomeCompleto=> setNomeCompleto(nomeCompleto)}                
                />
            </View>
 
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholderTextColor="#545455"
                TextInput placeholder="Email"
                maxLength='40'
                onChangeText={email=> setEmail(email)}                
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholderTextColor="#545455"
                placeholder="Senha"
                maxLength='20'
                onChangeText={senha => setSenha(senha)}
                secureTextEntry={true}               
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholderTextColor="#545455"
                placeholder="Celular"
                maxLength='11'
                onChangeText={celular => setCelular(celular)}
                />
            </View>
            <View style={styles.inputViewDescricao}>
                <TextInput
                multiline
                numberOfLines={4}
                maxLength={70}
                style={styles.TextInputDescricao}
                placeholderTextColor="#545455"
                placeholder="Descricao"
                onChangeText={descricao => setDescricao(descricao)}
                />
           
          </View>
            
            <TouchableOpacity style={styles.signUpBtn} onPress={()=>inserirDados()}>
                <Text style={styles.loginText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpBtn} onPress={()=>navigation.navigate('HomePage')}>
                <Text style={styles.loginText} >Voltar</Text>
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
      },
      loginText:{
        fontFamily: "cursive",
        fontWeight: "bold",
       },
       mensagemCadastrado:{
        marginBottom:15
       },
       inputView: {
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 20,
        width: "70%",
        height: 45,
        marginBottom: 15,
        alignItems: "center",
      },
      
      inputViewDescricao: {
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 20,
        width: "70%",
        height: 80,
        marginBottom: 15,
        alignItems: "center",
      },
      headerStyle:{
       
      },      
      image:{
        flex: 1,
        justifyContent: "center"
       },
       backBtn:{
        marginTop:20
       },
       signUpBtn: {
        width: "30%",
        borderRadius: 25,
        height: 30,
        borderStyle: "solid",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        backgroundColor: "white",
      },
       TextInput: {
        height: 50,
        width:"90%",
        flex: 1,
        padding: 10,
      },
      TextInputDescricao: {
        height: 50,
        width:"90%",
        flex: 1,
        padding: 10,
        
      },
       loginBtn: {  
        width: "80%",
        borderRadius: 25,
        height: 50,
        borderStyle: "solid",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "white",
      },
   
    })
  