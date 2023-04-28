import React from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//tela inicial
function telaInicial({navigation}) {
  return( 
    <View style={styles.inicial}>
    <Image style={styles.logo} source={require('./assets/icons8-foods-64.png')} />
      <Text style={styles.title}>Delivery4all</Text>
      <Text style={styles.subtitle}>O seu app de DELIVERY</Text>
  <View style={styles.containerButton}>
  <Button style={styles.button} title="FAZER PEDIDO" onPress={() => navigation.navigate('telaPedido')}/>
  </View>
</View>
  );
}

// Tela pedido
function telaPedido ({ navigation }) {
  return (
     <View style={styles.container}>
      <View>
        {/* VIEW DOS INPUTS */}
        <Text style={styles.label}> Prato: </Text>
        <TextInput style={styles.input}> </TextInput>
        <Text style={styles.label}> Quantidade: </Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.label}> Preco Unitario: </Text>
        <TextInput style={styles.input}></TextInput>
     </View>
     <View style = {styles.button}>
          {/* VIEW DO BUTTON */}
          <Button  title="Calcular Total" color="#1E90FF"/>
     </View>
    </View>
  );
}

// Creating the navigation stack
const Stack = createStackNavigator();
export default function App() {
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="telaInicial">
      <Stack.Screen name="Delivery4all" component={telaInicial} />
      <Stack.Screen name="telaPedido" component={telaPedido} />
    </Stack.Navigator>
  </NavigationContainer>
);
}


const styles = StyleSheet.create({
inicial: {
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
textalign: 'center',
},

button:{
  borderradius: '5px',
  fontSize: 60,
},

//container para botao no IOS
containerButton:{
  marginTop: 40,
  width: '100%',
  backgroundColor: '#00FF85',
},

//CSS DOS INPUT

  label:{
     fontSize: 15,
     color:'black',
     fontWeight: 'bold',
    
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    type: Number,
  },
});