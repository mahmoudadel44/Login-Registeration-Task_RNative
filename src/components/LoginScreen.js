import React, { Component } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Image, Alert, TextInput,
  ScrollView, KeyboardAvoidingView
} from 'react-native'
import { Icon } from 'react-native-elements'
import Header from './Header'
import * as firebase from 'firebase'
class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      lineColor: '#B7B7BC',
      valid: false,
      emailplhColor: '#B7B7BC',
      passwordplhColor: '#B7B7BC',
      errorMessage: null,
      emailIconColor: '#9999A2',
      passwordIconColor: '#9999A2',
      emailBorderColor: '#ccc',
      passwordBorderColor: '#ccc',
      emailBackgroundColor: '#F3F3F3',
      passwordBackgroundColor: '#F3F3F3',
      emailIconBorderColor: '#F3F3F3',
      passwordIconBorderColor: '#f2f2f2',
    }
  }
  //email focus
  onFocus1 = () => {
    this.refs.emailTextInput.focus();
    this.setState({ emailIconColor: '#1e1e2f' });
    this.setState({ passwordIconColor: '#9999A2' });
    this.setState({ emailplhColor: '#1e1e2f' });
    this.setState({ passwordplhColor: '#B7B7BC' })
    this.setState({ lineColor: '#1e1e2f' })
  }
  //password focus
  onFocus2 = () => {
    this.refs.passwordTextInput.focus();
    this.setState({ passwordIconColor: '#1e1e2f' })
    this.setState({ emailIconColor: '#9999A2' })
    this.setState({ passwordplhColor: '#1e1e2f' })
    this.setState({ emailplhColor: '#B7B7BC' })
    this.setState({ lineColor: '#B7B7BC' })
  }
  //login check credentials
  handleLogin = () => {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password).then(
      () => {

        this.props.navigation.navigate('Home'),
          this.setState({
            email: '',
            password: '',
            errorMessage: null,
          })
      }
    )

      .catch((error) => this.setState({ errorMessage: error.message }))
  };
  // componentWillMount(){
  //   Firebase.init();
  // }
  render() {
    const avatar = require('../images/BlackBeImage.jpg')
    return (
      // container
      <View style={{
        width: '100%', height: 500, flexDirection: 'column',
        flex: 1, justifyContent: 'flex-start', alignItems: 'center',
        backgroundColor: 'white', paddingRight: 0
      }}>
        {/* content */}
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={{
            display: 'flex', width: '100%', height: 60, backgroundColor: 'white',
            marginTop: 20, marginBottom: 20, alignItems: 'center'
          }}>
            <Image source={avatar} style={{
              height: 60, width: 65, marginTop: 10,
              borderRadius: 7, marginBottom: 10
              , backgroundColor: '#F3F3F3'
            }} />
          </View>
          {/* errorMessage view */}
          <View style={styles.errorMessage}>
            {this.state.errorMessage &&
              <Text style={styles.error}>{this.state.errorMessage}</Text>}</View>
          {/* inputs container */}
          <View style={{
            width: '100%',
            backgroundColor: '#F3F3F3', justifyContent: 'center'
            , alignItems: 'center', borderColor: '#9999A2'
          }}>
            {/* mail container */}
            <View style={{
              flexDirection: 'row', width: '100%', height: 60,
              backgroundColor: '#F3F3F3',
              justifyContent: 'flex-start'
            }}>

              <View style={{
                backgroundColor: this.state.emailBackgroundColor,
                width: 50, height: 45, marginLeft: 10, borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                justifyContent: 'center',
                borderColor: this.state.emailIconBorderColor
              }}>
                <Icon name='mail' type='feather' size={20}
                  style={{ justifyContent: 'center' }}
                  color={this.state.emailIconColor} /></View>

              <View style={{ justifyContent: 'flex-end' }}>
                <TextInput style={{
                  width: 250, height: 45, paddingTop: 6,
                  paddingRight: 20, marginRight: 8,
                  marginBottom: 8, borderTopRightRadius: 10,
                  borderBottomRightRadius: 10, backgroundColor: '#F3F3F3',
                  borderColor: this.state.emailBorderColor, borderStyle: 'solid',
                  fontSize: 16
                }}
                  placeholder="Account"
                  placeholderTextColor={this.state.emailplhColor}
                  keyboardType="email-address"
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                  onFocus={this.onFocus1}
                  ref="emailTextInput"
                />
              </View>
            </View>
            {/* password container */}

            <View style={{ width: '90%', height: 1, backgroundColor: this.state.lineColor, }}></View>
            <View style={{ flexDirection: 'row', width: '100%', height: 60, backgroundColor: '#F3F3F3', marginTop: 0, justifyContent: 'flex-start' }}>
              <View style={{
                backgroundColor: this.state.passwordBackgroundColor,
                width: 50, height: 45, marginTop: 7, marginLeft: 10,
                borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
                justifyContent: 'center',
                borderColor: this.state.passwordIconBorderColor
              }}>
                <Icon name='lock' type='feather' size={20}
                  style={{ justifyContent: 'center' }}
                  color={this.state.passwordIconColor} /></View>

              <View style={{ justifyContent: 'flex-end' }}>
                <TextInput style={{
                  width: 250, height: 45, paddingTop: 6,
                  paddingRight: 20, marginRight: 8, marginBottom: 8,
                  borderTopRightRadius: 10, borderBottomRightRadius: 10,
                  backgroundColor: '#F3F3F3',
                  borderColor: this.state.passwordBorderColor, borderStyle: 'solid',
                  fontSize: 16
                }}
                  placeholder="Password"
                  placeholderTextColor={this.state.passwordplhColor}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                  secureTextEntry={true}
                  onFocus={this.onFocus2}
                  ref="passwordTextInput"
                />
              </View>
            </View>


          </View>

          {/* </View> */}

          {/* login container */}
          <View style={{
            width: '100%', height: 60, backgroundColor: 'white', marginTop: 20,
            justifyContent: 'center', alignItems: 'center'
          }}>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.handleLogin}>
              <Text style={styles.styleText}>Log In </Text>
            </TouchableOpacity>
          </View>

          <View style={{
            width: '100%', height: 30, marginTop: 20,
            justifyContent: 'center', alignItems: 'center'
          }}>
            <TouchableOpacity style={{
              marginBottom: 10,
              alignItems: 'center', marginTop: 5
            }}
              onPress={() => this.props.navigation.navigate('Register')} >
              <Text style={{
                fontSize: 18,
                paddingTop: 3,
                alignItems: 'center',
                color: '#3B3C4E'
              }}>Sign Up </Text>
            </TouchableOpacity>
          </View>


          <View style={{
            width: '100%', height: 50, marginTop: 147, display: 'flex',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <TouchableOpacity style={{
           alignItems: 'center', height: 30
            }} >
              <Text style={{
                fontSize: 16,
                alignItems: 'center', paddingTop: 3,
                color: '#B7B7BC'
              }}>I FORGET MY PASSWORD </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  styleText: {
    fontSize: 18,
    paddingTop: 10,
    alignItems: 'center',
    color: 'white'
  },
  buttonStyle: {
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#3B3C4E",
    height: 45,
    width: '100%',
    alignItems: 'center',
    borderStyle: 'solid',
    marginTop: 20,
  },
  errorMessage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10, width: 318, height: 60
  },
  error: {
    color: '#E9466A',
    fontSize: 13,
    textAlign: 'center',
    width: '90%'
  }

})
export default LoginScreen