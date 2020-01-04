import React, { Component } from 'react'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import{createStackNavigator} from 'react-navigation-stack'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
 import Home from './components/Home'
import StartPage from './components/StartPage'
import {Icon} from 'react-native-elements'
import * as firebase from 'firebase';

//Sctipt Of Databas Of Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCINLc2hlje2Hww0dfcdJbe5rG4cbd_r5k",
    authDomain: "reactapp-297fe.firebaseapp.com",
    databaseURL: "https://reactapp-297fe.firebaseio.com",
    projectId: "reactapp-297fe",
    storageBucket: "reactapp-297fe.appspot.com",
    messagingSenderId: "1016550484111",
    appId: "1:1016550484111:web:8a9a1c6569927724c2a8fa",
    measurementId: "G-RMNRNXHN4X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Creating The Container Of Pages
const AppStack=createStackNavigator({
    StartPage:StartPage,
    Login:LoginScreen,
    Register:RegisterScreen,
    Home:Home
})

export default createAppContainer(
    AppStack
    )