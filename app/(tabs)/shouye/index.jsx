import { useEffect ,useState} from 'react';
import { Button, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { View , Text ,Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

export default function Follow() {
  const [more,setMore]=useState(false)
  const getMore=()=>{
    setMore(true)
  }
  const unMore=()=>{
    setMore(false)
  }

  const [show,setShow]=useState("甄嬛传")
  const getShow=(e)=>{
    setShow(e)
    setMore(false)
  }
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#3083FE'}}>
    
    <View>
      {more&&<View style={styles.more}>
        <ScrollView>
          <View style={{marginTop:30}}><Text onPress={()=>{getShow("哈利波特")}} style={{marginLeft:20}}>哈利波特</Text></View>
          <View style={{marginTop:20,marginBottom:10}}><Text onPress={()=>{getShow("甄嬛传")}}  style={{marginLeft:20}}>甄嬛传</Text></View>
          <View style={{marginTop:10,marginBottom:10}}><Text onPress={()=>{getShow("黑神话悟空")}}  style={{marginLeft:20}}>黑神话悟空</Text></View>
          <View style={{marginTop:10,marginBottom:10}}><Text style={{marginLeft:20}}>待定</Text></View>
        </ScrollView>
      </View>}
      
      <View style={styles.chosse}><Text style={{marginTop:10,marginLeft:20}}>{show}</Text><FontAwesome onPress={more?unMore:getMore} size={28} name={'angle-down'} style={{top:8,right:10,position:'absolute'}} /></View>
    </View>
    
    <View style={styles.container}>
      <Text style={{textAlign:'center',marginTop:80,fontSize:20}}>练习</Text>
    </View>

 
    <View style={{flex:1,justifyContent:'space-evenly',flexDirection:'row',marginTop:150}}>
      <View style={[styles.box,{margin:20}]}>
          <Text></Text>
          <Text style={{textAlign:'center',marginTop:10}}>总习题数</Text>
      </View>
      <View style={[styles.box,{margin:20}]}>
          <Text></Text>
          <Text style={{textAlign:'center',marginTop:10}}>答对题数</Text>
      </View>
      <View style={[styles.box,{margin:20}]}>
          <Text></Text>
          <Text style={{textAlign:'center',marginTop:10}}>正确率</Text>
      </View>
    </View>
      

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
  marginTop:180,
  marginLeft:120,
  width:150,
  height:120,
  backgroundColor:'white',
  borderRadius:20
  },box:{
  width:90,
  height:55,
  backgroundColor:'white',
  borderRadius:10,
  },chosse:{
  width:120,
  height:40,
  backgroundColor:'white',
  borderRadius:20,
  marginTop:20,
  marginLeft:20,
  },more:{
  width:120,
  height:150,
  backgroundColor:'white',
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
  marginLeft:20,
  position:'absolute',
  marginTop:40,
  }
})