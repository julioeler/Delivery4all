import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



//-------FUNCAO DA TELA INICIAL (SERA CHAMADA NA NAVEGACAO STACK)-----------
function telaInicial({navigation}) {
  return( 
    <View style={styles.inicialContainer}>
    <Image style={styles.logo} source={require('./assets/Logo-Icon.png')}/>
      <Text style={styles.title}>Delivery4all</Text>
      <Text style={styles.subtitle}>O seu app de DELIVERY</Text>

  <View style={styles.containerButton}>
  <Button style={styles.button} title="FAZER PEDIDO" onPress={() => navigation.navigate('Fazer Pedido')}/>
  </View>
</View>
  );
}




// FUNCAO DA TELA PEDIDO (SERA CHAMADA NA NAVEGACAO STACK)
function telaPedido ({ navigation }) {
//ANTES DE INICIAR A VIEW, CRIA PRIMEIRO AS CONSTANTES E AS FUNÇOES QUE SERAO UTILIZADAS NA VIEW
const [prato, setPrato] = useState('');
const [quantidade, setQuantidade] = useState('');
const [preco, setPreco] = useState('');
const [resultado, setResultado] = useState('');

//cria uma constante isValis booleana no componente
const [isValid, setIsValid] = useState(false); 

//FUNCAO PARA CALCULAR O VALOR DO PEDIDO QUE SERA CHAMADA NO BOTAO
calcularTotal = () =>{
  const num1Float = parseFloat(quantidade);
  const num2Float = parseFloat(preco);
  const multiplicacao = num1Float * num2Float;
  setResultado(multiplicacao.toString());
}

//FUNCAO PARA VERIFICAR SE OS INPUT TIPO NUMERICO ESTAO VAZIOS
//O PARSE FLOAT PASSA OS NUMEROS INTEIROS DOS INPUT PARA FLUTUANTES OU SEJA NUMEROS QUEBRADOS PARA O CALCULO SAIR CORRETAMENTE
const verificarCampo = () => {
  const num1 = parseFloat (quantidade);
  const num2 = parseFloat(preco);
  return !isNaN(num1) && !isNaN(num2);
};


 //-------------------------INICIO DA VIEW PEDIDO---------------------------
  return (
     <View style={styles.pedidoContainer}>
     <Image style={styles.logo} source={require('./assets/Logo-Icon.png')} />
        <View style={styles.inputContainer}>

        <Text style={styles.label}> Prato: </Text>
        <Input style={styles.input}  
        placeholder='X-Bacon Burguer' 
        value={prato} 
        onChangeText={setPrato}/>

        <Text style={styles.label}> Quantidade: </Text>
        <Input style={styles.input} 
          keyboardType='numeric'
          value={quantidade}
          onChangeText={(text) => {
            setQuantidade(text);
            setIsValid(verificarCampo());
          }}
          />

        <Text style={styles.label}> Preço Unitário: </Text>
        <Input style={styles.input} 
        keyboardType='numeric'
         value={preco} 
         onChangeText={(text) => {
           setPreco(text);
           setIsValid(verificarCampo());
         }}/>
     </View>

     {/* BOTAO CALCULAR*/}
     <View style = {styles.containerButton}>
          <Button style={styles.button} 
          title="Calcular Total"
          onPress={calcularTotal}
          disabled={!isValid} />
     </View>

     <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoTexto}> Total: </Text>
        <Text style={styles.resultadoValor}> R$ {resultado}  </Text>
    </View>
    
    <View style={styles.containerButton}>
      <Button style={styles.button} title="CONFIRMAR PEDIDO" onPress={()=> Alert.alert('Sucesso', 'Pedido realizado com sucesso!') }/>  
      </View>
    </View>
  );
}

// NAVEGAÇÃO STACK 
const Stack = createStackNavigator();
export default function App() {
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Delivery4all">
      <Stack.Screen name="Delivery4all" component={telaInicial} />
      <Stack.Screen name="Fazer Pedido" component={telaPedido} />
    </Stack.Navigator>
  </NavigationContainer>
);
}


//ESTILOS CSS

//CSS PAGINA INICIAL
const styles = StyleSheet.create({
inicialContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff',
padding: 40,
},

title: {
  marginTop: 20,
fontSize: 48,
fontWeight: 'bold',
},

subtitle: {
fontSize: 20,
color: '#695',
},


//CSS DO BOTAO (IOS)
containerButton:{
  width: '100%',
  padding: 8,
  color: '#4da2ff',
  //a cor no IOS esta bugando nao sei pq....
},

//CSS DOS INPUT

  pedidoContainer:{
    alignItems: 'center',
    padding: 16,
    width: '100%',
    backgroundColor: '#fff',
  },

  inputContainer:{
    width: '100%',
},

  label:{
     fontSize: 20,
     color:'black',
     fontWeight: 'bold',
     padding: 8,
  },
  input:{
    height: 40,
    borderWidth: 1,
    borderColor: '#a1a1a1',
    type: Number,
    padding: 8,
  },

//CSS DO TEXTO TOTAL

resultadoContainer:{
  width: '100%',
  marginTop: 12,
  padding: 8,
},

resultadoTexto:{
  fontSize: 20,
  fontWeight: 'bold',
},
  resultadoValor:{
    fontSize: 32,
    fontWeight: 'bold',
  }

});

