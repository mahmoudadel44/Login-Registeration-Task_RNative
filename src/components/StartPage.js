import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,
  ActivityIndicator,Image } from 'react-native'
import * as firebase from 'firebase'

class StartPage extends Component {
  //Make header:null ,To Put My Specila Header
static navigationOptions = {
  header:null
 }
render(){
  const avatar=require('../images/WhiteBeImage.png')
return(
    <View style={{width:'100%',backgroundColor:'white',
justifyContent:'center',alignItems:'center',flex:1,}}>

<View style={{backgroundColor:'white',width:'95%', justifyContent:"center",
alignItems:'center',
flex:1,marginTop:50}}>
<Image source={avatar} style={{height:65,width:65,
  marginTop:60,borderRadius: 7,marginBottom:12}} />
       
  <Text style={{fontSize:16,color:'#3B3C4E'}}>ShowCase&amp;Discover Creative Work</Text>
<TouchableOpacity style={styles.buttonStyle}
        onPress={()=>this.props.navigation.navigate('Login')}>
<Text style={styles.styleText}> Get Started</Text>
</TouchableOpacity>
</View>
</View>
)

}
}
const styles=StyleSheet.create({
  styleText:{
    fontSize:18,
    color:'white',
  },
  buttonStyle:{
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    borderRadius: 8,
   backgroundColor: "#3B3C4E",
    height: 45,
    width: '90%',
    marginTop:235,
    borderStyle:'solid',
  }
})
export default StartPage;