import { useEffect ,useState} from 'react';
import { Button, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { View , Text ,Alert} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function Find() {
  const [more,setMore]=useState(false)
  const getMore = ()=>{
    setMore(true)
  }
  const unmore =()=>{
    setMore(false)
  }
  const [love , setLove]=useState(0)
  const [loveorno,setLorno]=useState(false)
  const dianZan =()=>{
    const loves = love + 1
    setLove(loves)
    setLorno(true)
  }
  const quXiao = ()=>{
    const loves = love - 1
    setLove(loves)
    setLorno(false)
  }
  return (
    <>
    {more?<View style={{backgroundColor:'white'}}>
        <View style={styles.line}><Text style={{marginLeft:30,marginTop:7,fontSize:17,fontFamily:'Source Han Sans-Bold'}}>圈子分类</Text></View>
        <View style={styles.two}>
        <Text style={{marginLeft:30,paddingTop:8,paddingBottom:10,fontSize:14,fontFamily:'Source Han Sans-Bold'}}>动漫</Text>
        <Text style={styles.three}>游戏</Text>
        <Text style={styles.three}>影视</Text>
        <Text style={styles.three}>漫画</Text>
        <Text style={styles.three}>歌曲</Text>
        <Text style={{marginLeft:30,paddingTop:8,paddingBottom:10,fontSize:14,fontFamily:'Source Han Sans-Bold'}}>动物</Text>
        <Text style={styles.three}>舞蹈</Text>
        <Text style={styles.three}>汽车</Text>
        <Text style={styles.three}>音乐</Text>
        <Text style={styles.three}>美食</Text>
        <Text style={{marginLeft:30,paddingTop:8,paddingBottom:10,fontSize:14,fontFamily:'Source Han Sans-Bold'}}>科技</Text>
        <Text style={styles.three}>运动</Text>
        <Text style={styles.three}>美术</Text>
        <Text style={styles.three}>文学</Text>
        </View>
        </View>:<View style={styles.line}>
      <ScrollView horizontal>
      <Text style={{marginLeft:25,paddingTop:5,fontSize:14,fontFamily:'Source Han Sans-Bold'}}>动漫</Text>
      <Text style={styles.one}>游戏</Text>
      <Text style={styles.one}>影视</Text>
      <Text style={styles.one}>漫画</Text>
      <Text style={styles.one}>歌曲</Text>
      <Text style={styles.one}>动物</Text>
      <Text style={styles.one}>舞蹈</Text>
      <Text style={styles.one}>汽车</Text>
      <Text style={styles.one}>音乐</Text>
      <Text style={styles.one}>美食</Text>
      <Text style={styles.one}>科技</Text>
      <Text style={styles.one}>运动</Text>
      <Text style={styles.one}>美术</Text>
      <Text style={styles.one}>文学</Text>
      </ScrollView>
    </View>}
    <View style={styles.more}><View style={{marginTop:3,marginLeft:6}}><FontAwesome onPress={more?unmore:getMore} size={28} name={more?'angle-up':'angle-down'} /></View></View>

    <View style={styles.page}>
      <Image style={{height:150}} />
      <Text>标题</Text>
      <Text>圈子</Text>
      <Text onPress={loveorno?quXiao:dianZan}>{love}</Text>
    </View>
    </>
    
  );
}
const styles = StyleSheet.create({
  page:{
  width:160,
  height:220,
  color:'azure',
  backgroundColor:'azure',
  marginTop:0
  },more:{
  position:'absolute',
  top:0,
  right:0,
  backgroundColor:'white',
  width:55,
  height:36,
  },getmore:{
    flex:1,
    flexDirection:'row'
  },line:{
   height:36,
   backgroundColor:'white'
  },one:{
  marginLeft:36,
  paddingTop:5,
  fontSize:14,
  fontFamily:'Source Han Sans-Bold',
  },two:{
    flexDirection:'row',
    flexWrap:'wrap',
  },three:{
  marginLeft:45,
  paddingTop:8,
  paddingBottom:10,
  fontSize:14,
  fontFamily:'Source Han Sans-Bold',
  }
})