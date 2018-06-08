/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import { Alert, AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
 import Animation from 'lottie-react-native';

 import anim from './assets/alex.json';


 export default class lottieloader extends Component {
     
    constructor(props) {
        super(props);
    }
   
   _onPlay = () => {
    this.animation.play();
  }
  
  _onReset = () => {
   this.animation.reset();
 }
  
   render() {
     return (
           <View style={styles.container}>
             <Text style={styles.welcome}>Alyx Keyhole</Text>
             <View>
               <Animation
                 ref={animation => {
                   this.animation = animation;
                 }}
                 style={{
                   width: 215,
                   height: 116
                 }}
                 loop={false}
                 source={anim}
               />
             </View>
             <View style={styles.buttons}>
             <Button
                  onPress={this._onPlay}
                  title="Play"
                  color="#841584"
                />
                <Button
                     onPress={this._onReset}
                     title="Reset"
                     color="#841584"
                   />
            </View>
           </View>
     );
   }
 }

 const styles = StyleSheet.create({
   buttons: {
      flex: 1
   },
   container: {
     flex: 1,
     justifyContent: 'flex-start',
     alignItems: 'center',
     backgroundColor: '#ffffff'
   },
   welcome: {
     fontSize: 30,
     textAlign: 'center',
     margin: 10,
     color: '#000000'
    }
 });

 AppRegistry.registerComponent('lottieloader', () => lottieloader);
