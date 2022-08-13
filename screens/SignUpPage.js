
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePicker from 'react-native-image-picker';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-native-elements';


const Stack = createStackNavigator();

export default function SignUpPage({ route }) {
    

    function cadastrarPagina() {
        const username = email;
        const password = senha;
        navigation.navigate('Logged');
         
      }

    const back = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png" };

    
    const [getNomeCompleto,setNomeCompleto] = useState();
    const [getCelular,setCelular] = useState();
    const [getEmail, setEmail] = useState();
    const [getSenha, setSenha] = useState();
    const[getDescricao, setDescricao] = useState();
    const[getId, setId] = useState();
    const[getCodigoArtista, setCodigoArtista] = useState();
    const[getPortfolioArtista, setPortfolioArtista] = useState();
  

    useEffect(()=>{
      if(route.params){
            const { nome } =  route.params 
            const { telefone } =  route.params 
            const { email } =  route.params 
            const { id } =  route.params
            const { cpf } =  route.params
            const { alterar } =  route.params
  
            setNome(nome)
            setTelefone(telefone)
            setCpf(email)
            setId(id)
            setAlterar(alterar)
            setCpf(cpf)
  
      }
    },[])  

    async function inserirDados(){
      
      axios.post('http://localhost:8080/api/v1/criaPerfilArtista', {
        codigoArtista: route.params.id,
        portfolioArtista:[ "url" ],
        descricaoProfissional: getDescricao
        })
        .then(function (response) {
          setNomeCompleto('');
          setEmail('');
          setCelular('');
          setSenha('');
          setId(response.id)
          navigation.navigate('Login');
          showMessage({
              message: "Registro Cadastrado com sucesso",
              type: "success",
            }); 
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });     
      
    }
   


    return (
        <ImageBackground source={back} resizeMode="cover" style={styles.image}>

        <View style={styles.container}>
            

        
        <View style={styles.inputDescricao}>
            <TextInput
            style={styles.TextInput}
            placeholderTextColor="#545455"
            TextInput placeholder="Descrição"
            onChangeText={descricaoProfissional=> setDescricao(descricaoProfissional)} 
            value={getEmail}
            />
        </View>
      
       
        
        <TouchableOpacity style={styles.signUpBtn} onPress={()=>inserirDados()}>
            <Text style={styles.loginText} >Salvar</Text>
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
      inputDescricao: {
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 20,
        width: "70%",
        height: 80,
        marginBottom: 15,
        alignItems: "center",
      },
      TextInput: {
        height: 80,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      loginText:{
        fontFamily: "cursive",
        fontWeight: "bold",
       },
       image:{
        flex: 1,
        justifyContent: "center"
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
  