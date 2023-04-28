import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//tela inicial
function telaInicial({navigation}) {
  return( 
    <View style={styles.inicial}>
    <Image style={styles.logo} source={require('./assets/icons8-foods-64.png')} />
      <Text style={styles.title}>Fake Ifood</Text>
      <Text style={styles.subtitle}>Melhor que o original</Text>
  <View style={styles.containerButton}>
  <Button style={styles.button} title="FAZER PEDIDO" onPress={() => navigation.navigate('telaPedido')}/>
  </View>
</View>
  );
}

// Tela pedido
function telaPedido ({ navigation }) {
  return (
    <View style={styles.pedido}>
    <Text> Tela de pedido </Text>
    
    <Button title="Voltar para logo" onPress={() => navigation.navigate('Fake Ifood')} />
    </View>
  );
}



// Creating the navigation stack
const Stack = createStackNavigator();
export default function App() {
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="telaInicial">
      <Stack.Screen name="Fake Ifood" component={telaInicial} />
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

});






