import { useEffect ,useState} from 'react';
import { Button, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { View , Text ,Alert} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function Find() {
  const [recommend,setRecommend]=useState(true)
  const [favor,setFavor]=useState(false)
  const [ne,setNe]=useState(false)
  const [follow,setFollow]=useState(false)
  const getRecommond=()=>{
    setRecommend(true)
    setFavor(false)
    setNe(false)
    setFollow(false)
  }
  const getFavor=()=>{
    setRecommend(false)
    setFavor(true)
    setNe(false)
    setFollow(false)
  }
  const getNew=()=>{
    setRecommend(false)
    setFavor(false)
    setNe(true)
    setFollow(false)
  }
  const getFollow=()=>{
    setRecommend(false)
    setFavor(false)
    setNe(false)
    setFollow(true)
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
    <View style={styles.line}>
      <View style={{flex:1,flexDirection:'row'}}>
      <View style={[styles.headline,recommend&&{backgroundColor:'#3D89FB',borderRadius:15}]}><Text onPress={getRecommond} style={[styles.text,{color:recommend&&'white'}]}>推荐</Text></View>
      <View style={[styles.headline,favor&&{backgroundColor:'#3D89FB',borderRadius:15}]}><Text onPress={getFavor} style={[styles.text,{color:favor&&'white'}]}>最热</Text></View>
      <View style={[styles.headline,ne&&{backgroundColor:'#3D89FB',borderRadius:15}]}><Text onPress={getNew} style={[styles.text,{color:ne&&'white'}]}>最新</Text></View>
      <View style={[styles.headline,follow&&{backgroundColor:'#3D89FB',borderRadius:15}]}><Text onPress={getFollow} style={[styles.text,{color:follow&&'white'}]}>关注</Text></View>
      </View>
    </View>
    

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
  },line:{
   height:36,
   backgroundColor:'white',
  },headline:{
    marginTop:5,
    marginLeft:20,
    width:60,
    height:25,
  },text:{
    textAlign:'center',
    marginTop:1
  }
})