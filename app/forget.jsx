import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, TextInput } from 'react-native';

export default function ForgetScreen() {
  
  return (
    <ImageBackground source={require('./img/bac.png')} style={{width:'100%',height:'100%'}}>
      
      <View style={{position:'absolute',marginTop:80,marginLeft:50}}>
        <Text style={{color:'white',fontSize:30}}>Hello!</Text>
        <Text style={{color:'white',fontSize:18}}>欢迎来到圈圈</Text>
      </View>

    <View style={styles.container}>
    
    <View style={[styles.gray,{marginTop:80,marginLeft:25}]}></View>
    <View style={[styles.gray,{marginTop:140,marginLeft:25}]}></View>
    <View style={[styles.gray,{marginTop:200,marginLeft:25}]}></View>
    <View style={[styles.gray,{marginTop:260,marginLeft:25}]}></View>

     <View style={styles.line}></View>
     <View>
      <Text style={{marginTop:30,marginLeft:120}}>重置密码</Text>
     </View>
 

    <View style={{marginTop:16,marginLeft:30}}>
    <TextInput style={{marginTop:10}} placeholder='请输入邮箱'></TextInput>
    </View>
    <View style={{marginTop:10,marginLeft:30}}>
    <TextInput style={{marginTop:10}} placeholder='请输入验证码'></TextInput>
    <Text style={{position:'absolute',color:'blue',marginTop:18,marginLeft:165,}}>获取验证码</Text>
    </View>
    <View style={{marginTop:10,marginLeft:30}}>
    <TextInput style={{marginTop:10}} placeholder='请输入新密码'></TextInput>
    </View>
    <View style={{marginTop:10,marginLeft:30}}>
    <TextInput style={{marginTop:10}} placeholder='再次输入新密码'></TextInput>
    </View>

    <View>
    <View style={styles.login}><Link style={{color:'white',textAlign:'center',marginTop:4}} href={'/'}>返回登录</Link></View>
    <View style={styles.sure}><Link style={{color:'white',textAlign:'center',marginTop:4}} href={'/'}>确认</Link></View>
    </View>   
    
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
  },gray:{
    width:250,
    height:30,
    borderRadius:10,
    backgroundColor:'#E5E5E5',
    position:'absolute',
  },line:{
    width:25,
    height:2,
    backgroundColor:'#3083FE',
    position:'absolute',
    marginTop:52,
    marginLeft:136
  },login:{
    width:100,
    height:30,
    borderRadius:10,
    backgroundColor:'blue',
    position:'absolute',
    marginTop:50,
    marginLeft:25
  },sure:{
    width:100,
    height:30,
    borderRadius:10,
    backgroundColor:'blue',
    position:'absolute',
    marginTop:50,
    marginLeft:175
  }
});