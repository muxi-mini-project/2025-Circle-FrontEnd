import { Link } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground,Image, TextInput } from 'react-native';
import { useState } from 'react';
export default function SignScreen() {
  const [agree,setAgree]=useState(false)
    const getAgree = ()=>{
      setAgree(true)
    }
    const disAgree = ()=>{
      setAgree(false)
    }
  return (
    <ImageBackground source={require('./img/bac.png')} style={{width:'100%',height:'100%'}}>
      
      <View style={{position:'absolute',marginTop:80,marginLeft:50}}>
        <Text style={{color:'white',fontSize:30}}>Hello!</Text>
        <Text style={{color:'white',fontSize:18}}>欢迎来到圈圈</Text>
      </View>
      
      
      
      <View style={styles.container}>
      <View>
        <View style={styles.box}>
          <Link style={{color:'#9A9898'}} href={'/'}>登录</Link>
          <View style={styles.line}></View>
          <Text>注册</Text>
          <View></View>
        </View>
      </View>
      
      <View style={[styles.gray,{marginTop:127,marginLeft:25}]}></View>
      <View style={[styles.gray,{marginTop:217,marginLeft:25}]}></View>

      <View style={{marginTop:50,marginLeft:30}}>
      <Text>邮箱</Text>
      <TextInput style={{marginTop:10}} placeholder='请输入邮箱'></TextInput>
      </View>

      <View style={{marginTop:20,marginLeft:30}}>
      <Text>验证码</Text>
      <TextInput secureTextEntry style={{marginTop:10}} placeholder='请输入验证码'></TextInput>
      <Text style={{position:'absolute',color:'blue',marginTop:38,marginLeft:165,}}>获取验证码</Text>
      </View>
      
      <View style={styles.login}><Link style={{color:'white',textAlign:'center',marginTop:4}} href={'/setcipher'}>确认</Link></View>
      
    </View>  
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width:300,
    height:432,
    backgroundColor:'white',
    borderRadius:10,
    marginLeft:45,
    marginTop:180,
  },login:{
    width:250,
    height:30,
    borderRadius:10,
    backgroundColor:'blue',
    marginTop:50,
    marginLeft:22
  },gray:{
    width:250,
    height:30,
    borderRadius:10,
    backgroundColor:'#E5E5E5',
    position:'absolute',
  },box:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:25,
    marginLeft:-20,
    width:400
  },line:{
    width:25,
    height:2,
    backgroundColor:'#3083FE',
    position:'absolute',
    marginTop:22,
    marginLeft:116
  },agree:{
    width:8,
    height:8,
    borderRadius:5,
    borderColor:'#000000',
    borderWidth:1,
    position:'absolute',
    marginLeft:28,
    marginTop:26
  },circle:{
    width:5,
    height:5,
    borderRadius:5,
    backgroundColor:'#5A9CFE',
    position:'absolute',
    marginLeft:29.5,
    marginTop:27.5
  }
});