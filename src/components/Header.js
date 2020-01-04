import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements'
const Header=({title,onPress,iconSize,textmargin,backGround})=>{
    return(
<View style={{backgroundColor:backGround,width:'100%',height:55,justifyContent:'center',
alignItems:'center',
display:'flex'
}}>
   <Text style={{  fontSize:17,
        marginRight:textmargin}}>{title}</Text>
   <TouchableOpacity style={{position:'absolute',
            top:15,
            left:13,
            color:'red',}}
    onPress={onPress}
       >
           <Icon name="arrow-back" color='black' size={iconSize}></Icon>
              </TouchableOpacity>
</View>
    )
}

const styles=StyleSheet.create({
        textStyle:{
      
        },
    
})
export default Header