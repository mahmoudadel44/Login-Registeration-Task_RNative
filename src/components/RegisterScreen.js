import React, { Component } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Image, Alert, TextInput, Button,
  ScrollView, KeyboardAvoidingView
} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Header from './Header'
import { Icon } from 'react-native-elements'
import * as firebase from 'firebase'
class RegisterScreen extends Component {

  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      valid:false,
      errorMessage: null,
      filePath: {},
      lineColor1:'#B7B7BC',
      lineColor2:'#B7B7BC',
      emailplhColor: '#B7B7BC',
      passwordplhColor: '#B7B7BC',
      userIconColor: '#9999A2',
      userplhColor:'#B7B7BC',
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
    this.setState({ emailplhColor: '#1e1e2f' });
    this.setState({ userIconColor: '#9999A2' });
    this.setState({ userplhColor: '#9999A2' })
    this.setState({ passwordIconColor: '#9999A2' });
    this.setState({ passwordplhColor: '#9999A2' });
    this.setState({lineColor1:'#1e1e2f'})
    this.setState({lineColor2:'#B7B7BC'})

  }
  //user focus
  onFocus2 = () => {
      this.refs.userTextInput.focus();
    this.setState({ userIconColor: '#1e1e2f' });
    this.setState({ userplhColor: '#1e1e2f' })
    this.setState({ emailIconColor: '#9999A2' });
    this.setState({ passwordIconColor: '#9999A2' });
    this.setState({ passwordplhColor: '#9999A2' });
    this.setState({ emailplhColor: '#9999A2' });
    this.setState({lineColor1:'#B7B7BC'})
    this.setState({lineColor2:'#1e1e2f'})
  }
  //password focus
  onFocus3 = () => {
    this.refs.passwordTextInput.focus();
    this.setState({ passwordIconColor: '#1e1e2f' });
    this.setState({ passwordplhColor: '#1e1e2f' });
    this.setState({ userIconColor: '#9999A2' });
    this.setState({ userplhColor: '#9999A2' })
    this.setState({ emailIconColor: '#9999A2' });
    this.setState({ emailplhColor: '#9999A2' });
    this.setState({lineColor1:'#B7B7BC'})
    this.setState({lineColor2:'#B7B7BC'})
  }
  //check user and navigate to home  
  // userAuth = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     user ? this.props.navigation.navigate("Home") : null
  //   })
  // }

userAuth=()=>{
//   firebase.auth().onAuthStateChanged(user=>{
//     user?this.props.navigation.navigate("Home"):null
// })
this.props.navigation.navigate("Home")
}
// signup with name and password
handleSignUp=()=>{
this.state.username!==''? 
firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
.then(userCredentials =>{   
  this.userAuth()
  return userCredentials.user.updateProfile({
    displayName:this.state.username
  }
  )
}
)
.catch((error) => this.setState({errorMessage:error.message})):
Alert.alert('enter username')
}
  //select an image from gallery or by open phone camera
  chooseImage = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        let source = response;
        this.setState({
          filePath: source,
        });
      }
    });
  };

  render() {
    return (
      <View style={{
        width: '100%', height: 500, flexDirection: 'column',
        flex: 1, justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white', paddingRight: 0, marginBottom: 10
      }}>
        <Header title='Sign up'
          textmargin={140}
         backGround= {'white'}
          iconSize={25} onPress={() =>
            this.props.navigation.goBack()
          } />
        <ScrollView  showsVerticalScrollIndicator={false}  >
          {/* camera */}
          <View style={{
            width: 60, height: 60, backgroundColor: '#F3F3F3', display: 'flex',
            marginTop: 10, alignItems: 'center', justifyContent: 'center',
            borderRadius:40, marginLeft: 130, borderWidth: 0.2,marginBottom:20,
            alignItems: 'center',
          }}>

            <TouchableOpacity onPress={this.chooseImage}>
              {this.state.filePath.data ? <Image
                source={{
                  uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                }}
                style={{
                  width: 60, height: 60, flex: 1,
                  borderRadius: 40
                }}
              /> :
                <Icon name='camera' type='feather' size={30}  />
              }


            </TouchableOpacity>

          </View>

         {/* error message */}
          <View style={styles.errorMessage}>
            {this.state.errorMessage &&
             <Text style={styles.error}>{this.state.errorMessage}</Text>}
          </View>
                      {/* content of inputs */}
          <View style={{
            width: '100%',
            backgroundColor: '#F3F3F3', justifyContent: 'center', alignItems: 'center',
          }}>
            {/* email view */}
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
                <Icon name='mail' type='feather' size={20} style={{ justifyContent: 'center' }}
                  color={this.state.emailIconColor} /></View>

              <View style={{ justifyContent: 'flex-end' }}>
                <TextInput style={{
                  width: 250, height: 45, paddingTop: 6, paddingRight: 20, marginRight: 8,
                  marginBottom: 8, borderTopRightRadius: 10, 
                  borderBottomRightRadius: 10, backgroundColor: '#F3F3F3',
                  borderColor: this.state.emailBorderColor, borderStyle: 'solid',
                  fontSize: 16
                }}
                  placeholder="Gmail"
                  placeholderTextColor={this.state.emailplhColor}
                  keyboardType="email-address"
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                  onFocus={this.onFocus1}
                  ref="emailTextInput"
                />
              </View>
            </View>

{/* line view */}
            <View style={{ width: '90%', height: 1,
             backgroundColor: this.state.lineColor1, }}></View>
             {/* user view */}
            <View style={{ flexDirection: 'row', width: '100%', 
            height: 60, backgroundColor: '#F3F3F3', marginTop: 0,
             justifyContent: 'flex-start' }}>
              <View style={{
                backgroundColor: this.state.passwordBackgroundColor,
                 width: 50, height: 45, marginTop: 7, marginLeft: 10,
                borderTopLeftRadius: 10, borderBottomLeftRadius: 10, 
                justifyContent: 'center',
                borderColor: this.state.passwordIconBorderColor
              }}>
                <Icon name='user' type='feather' size={20}
                 style={{ justifyContent: 'center' }}
                  color={this.state.userIconColor} /></View>

              <View style={{ justifyContent: 'flex-end' }}>
                <TextInput style={{
                  width: 250, height: 45, paddingTop: 6, paddingRight: 20,
                   marginRight: 8, marginBottom: 8,
                  borderTopRightRadius: 10, borderBottomRightRadius: 10,
                   backgroundColor: '#F3F3F3',
                  borderColor: this.state.passwordBorderColor, borderStyle: 'solid',
                  fontSize: 16
                }}
                  placeholder="Name"
                  placeholderTextColor={this.state.userplhColor}
                  onChangeText={(username) => this.setState({ username })}
                  value={this.state.username}
                  onFocus={this.onFocus2}
                  ref="userTextInput"
                />
              </View>
            </View>
            {/* line view */}
            <View style={{ width: '90%', height: 1,
             backgroundColor:this.state.lineColor2, }}></View>
             {/* password view */}
            <View style={{ flexDirection: 'row', width: '100%', height: 60,
             backgroundColor: '#F3F3F3', marginTop: 0, justifyContent: 'flex-start' }}>
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
                  width: 250, height: 45, paddingTop: 6, paddingRight: 20,
                   marginRight: 8, marginBottom: 8,
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
                  onFocus={this.onFocus3}
                  ref="passwordTextInput"
                />
              </View>
            </View>


          </View>


          <View style={{
            width: '100%', height: 60, backgroundColor: 'white', marginTop: 10,
            justifyContent: 'center', alignItems: 'center'
          }}>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.handleSignUp}>
              <Text style={styles.styleText}> Create New Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  styleText: {
    fontSize: 16,
    paddingTop: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  error: {
    color: '#E9466A',
    fontSize: 13,
    textAlign: 'center'
  }

})

export default RegisterScreen