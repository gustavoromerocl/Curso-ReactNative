/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight, 
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  image:{
    borderRadius: 100,
    width: width * 0.4,
    height: 200,
  }
});

const App: () => React$Node = () => {

  console.log({height, width})
  //enhanced object literal
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View 
            style={{
              backgroundColor: '#2ecc71',
              padding: 20,
              margin: 5,
              borderRadius: 10,
              borderColor: 'orange',
              borderWidth: 1,
             }}>
            <Text 
              style={{
                color: 'white',
                fontSize: 30,
                textDecorationLine: 'underline line-through'
              }}>WELCOME TO VEGAN LIFE</Text>
          </View>
          <Button color='#f1c40f' title='CALENTAMIENTO GLOBAL'/>
          <Button color='red' title='INCENDIOs FORESTALES'/>
          <Button onPress={ () => {
            console.log("boton incendios")
          } } color='blue' title='GLACIARES EN PELIGRO'/>
          <Button color='green' title='DESFORESTACION'/>

          <TouchableOpacity
            style={{
              backgroundColor: "green",
              padding: 20,
              margin: 5,
              borderRadius: 10,
              alignItems: "center",
              alignSelf: "center"
            }}
            onPress={ () => {
              console.log("boton onpress")
            } }
            onLongPress={ () => {
              console.log("boton presionado")
            } }
          >
            <Text style={{
              color: "white",
              fontSize: 30,
              textDecorationLine: 'underline line-through'
            }}>Button Touch</Text>
          </TouchableOpacity>

          <TouchableHighlight
            style={{
              backgroundColor: "green",
              padding: 20,
              margin: 5,
              borderRadius: 10,
              alignItems: "center",
              alignSelf: "center"
            }}
            onPress={ () => {
              console.log("boton onpress")
            } }
            onLongPress={ () => {
              console.log("boton presionado")
            } }
            underlayColor="#2ecc71"
          >
            <Text style={{
              color: "white",
              fontSize: 30,
              textDecorationLine: 'underline line-through'
            }}>Button Touch High Light</Text>
          </TouchableHighlight>

          <View style={{
            alignItems: "center"
          }}>
            <Image
              style={styles.image}
              resizeMode= "cover"
              source={{uri: 
                "https://images.pexels.com/photos/3626733/pexels-photo-3626733.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              }}
            />
            <Image
              style={styles.image}
              resizeMode= "cover"
              source={{uri: 
                "https://images.pexels.com/photos/3626733/pexels-photo-3626733.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              }}
            />
            <Image
              style={styles.image}
              resizeMode= "cover"
              source={{uri: 
                "https://images.pexels.com/photos/3626733/pexels-photo-3626733.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              }}
            />

          <ImageBackground 
            style={{
              height: 200,
              width: 200,
              alignItems: "flex-start",
            }}
            source={{uri: 
            "https://images.pexels.com/photos/4508024/pexels-photo-4508024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }}>
            <Text style={{
              backgroundColor: "gray",
            }}>Componente View con una imagend de fondo</Text>
          </ImageBackground>

          </View>


        </ScrollView>
        
        
        <FlatList
          data={[
            {id: 1, nombre: "Bla"}, 
            {id: 2, nombre: "Fu"},
            {id: 3, nombre: "Fa"},
          ]}
          
          keyExtractor={(item) => item.id.toString()}

          renderItem={({item: {id, nombre}}) => {
            return (
              <View>
              <Text>Hola {nombre}</Text>
              </View>
            )
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
