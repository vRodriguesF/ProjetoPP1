
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,TextInput, ImageBackground } from 'react-native';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import axios from 'axios';


const Stack = createStackNavigator();

export default function Login({ navigation }) {
    const back = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png" };

    const[getEmail, setEmail] = useState('');
    const[getSenha, setSenha] = useState('');
    const [getDescricao,setDescricao] = useState();
    const [getNomeCompleto,setNomeCompleto] = useState();
    const [getCelular,setCelular] = useState();
    const [getId, setId] = useState();
    const [getMensagem, setMensagem] = useState();
    


    async function inserirDados(){
        
      axios.post('http://localhost:8080/api/v1/login/artista', {
          email: getEmail,
          senha: getSenha
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
          navigation.navigate('Logged')
          showMessage({
              message: "Registro Cadastrado com sucesso",
              
            }); 
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          
        });     
      
    }
    return (
      <ImageBackground  source={require('../assets/background.png')} style={styles.image} >
        <View style={styles.container}>
        <Text style={styles.mensagemCadastrado}>{getMensagem}</Text>

             <Text style={styles.loginText}>Email</Text>
             <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                    placeholder="E-mail" 
                    maxLength='40'
                    onChangeText={email=> setEmail(email)}
                />
      </View>
      <Text style={styles.loginText}>Senha</Text>
      <View style={styles.inputView}>

                <TextInput
                style={styles.TextInput}
                placeholder="Senha"
                maxLength='11'
                onChangeText={senha=> setSenha(senha)}
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                
                />
    </View>
    <TouchableOpacity style={styles.loginBtn} onPress={()=>inserirDados()}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('HomePage')}>
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
       TextInput: {
        height: 50,
        width:"90%",
        flex: 1,
        padding: 10,
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
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        backgroundColor: "white",
      },
   
    })
  