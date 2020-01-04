import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import Header from './Header'
export default class Home extends Component {
    static navigationOptions = {
        header:null
       }
render(){
return(
    <View style={styles.container} >
<Header title="Home" backGround="#F3F3F3" btnWidth='32'onPress={()=>this.props.navigation.navigate('Login')}/>
        <Text style={styles.styleText} >Welcome To Home</Text>
    </View>
)

}
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    styleText:{
        fontSize:18,
        paddingTop:270,
        color:'#1e1e2f'
      },
    })

