import { Button, Image, ScrollView, StyleSheet, TextInput ,TouchableOpacity} from 'react-native';
import { View , Text ,Alert} from 'react-native';
import { useState } from 'react';
import React from 'react';
import { navigate } from 'expo-router/build/global-state/routing';
import { useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
export default function SendPage() {
  const [activeId, setActiveId] = useState(null)  
  const tags = [
    {id:1,text:'tag1'},
    {id:2,text:'tag2'},
    {id:3,text:'tag3'},
    {id:4,text:'tag4'},
    {id:5,text:'tag5'},
    {id:6,text:'tag5'},
    {id:7,text:'tag5'},
    {id:8,text:'tag5'},
    {id:9,text:'tag5'},
    {id:10,text:'tag5'},
    {id:11,text:'tag0'},
]
    const handlePress = (id) => {
        setActiveId(id);
      };
    
      const getTagStyle = (id) => {
        return activeId === id ? style.activeTag : style.inactiveTag;
      };
      const getTextStyle = (id) => {
        return activeId === id ? style.activetext : style.inactivetext
      }

      const navigation = useNavigation()
    
    const [circle,setCircle]=useState(false)
    const [see,setSee]=useState(false)
    const getCircle=()=>{
    setCircle(true)
    setFind(false)
    }
    const unCircle=()=>{
        setCircle(false)
    }
  
    const [agree,setAgree]=useState(false)
    const getAgree = ()=>{
      setAgree(true)
      setFans(false)
      setOneself(false)
    }
    const disAgree = ()=>{
      setAgree(false)
    }
    const [fans,setFans]=useState(false)
    const getFans = ()=>{
      setFans(true)
      setAgree(false)
      setOneself(false)
    }
    const disFans = ()=>{
      setFans(false)
    }
    const [oneself,setOneself]=useState(false)
    const getOneself = ()=>{
      setOneself(true)
      setFans(false)
      setAgree(false)
    }
    const disOneself = ()=>{
      setOneself(false)
    }

    const [find,setFind]=useState(false)
    const getFind = ()=>{
      setFind(true)
      setCircle(false)
    }
    const unFind = ()=>{
      setFind(false)
    }
  return (
    <>
    <View style={{height:80,backgroundColor:'white'}}>
     <View style={style.first}>
        <Text onPress={()=>{navigation.goBack()}}><FontAwesome size={28} name='angle-left'/></Text>
        <Text style={{width:50,height:22,backgroundColor:'#3D89FB',color:'white',borderRadius:7,textAlign:'center'}}>发布</Text>
    </View>   
    </View>

    <View style={{height:200,backgroundColor:'white',marginTop:1}}>
    <View style={{padding:20}}>
        <TextInput style={{fontSize:20}} maxLength={20} placeholder='标题文字'></TextInput>
        <TextInput multiline maxLength={200} style={{}} placeholder='正文'></TextInput>
        
    </View>   
    </View>
    <View style={{height:100,backgroundColor:'white',marginTop:1}}> 
    <View style={style.second}>
        <Image />
        <Text>封面</Text>
    </View>  
    </View>   
    <View style={{height:50,backgroundColor:'white',marginTop:1}}>
     <Text style={{marginTop:15,marginLeft:25,fontSize:16}}>选择圈子</Text>
     <FontAwesome onPress={circle?unCircle:getCircle} size={28} name={circle?'angle-up':'angle-down'} style={{top:15,right:15,position:'absolute'}} />
    </View>  
    <View style={{height:50,backgroundColor:'white',marginTop:1}}>
     <Text style={{marginTop:15,marginLeft:25,fontSize:16}}>公开可见</Text>
     <FontAwesome onPress={find?unFind:getFind} size={28} name={find?'angle-up':'angle-down'} style={{top:15,right:15,position:'absolute'}} />   
    </View>  
    <View style={{height:50,backgroundColor:'white',marginTop:1,}}>
     <Text style={{marginTop:15,marginLeft:25,fontSize:16}}>评论区等级限制</Text>
     <FontAwesome size={28} name='angle-right' style={{top:15,right:15,position:'absolute'}} />   
    </View>
    
    <View style={{width:'100%',position:'absolute',backgroundColor:'white',marginTop:536,height:'100%'}}></View>

    {circle?<View style={style.end}>
            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
            {tags.map((tag) => (
            <View key={tag.id} style={[style.tagContainer, getTagStyle(tag.id)]}>
          <Text onPress={() => handlePress(tag.id)} style={getTextStyle(tag.id)}>{tag.text}</Text>                
            </View>
      ))}      
            </View>
      </View>:null}
    
    {find?<View style={style.end}>
        <View>
          <Text style={{marginTop:15,marginLeft:15,marginBottom:10}}>所有人可见</Text>
          <View style={style.agree}><Text onPress={agree?disAgree:getAgree}>{agree?<View style={style.circle}><Text onPress={agree?disAgree:getAgree}></Text></View>:null}</Text></View>
        </View>
        <View style={{borderColor:'#D8D8D8',borderWidth:1}}>
          <Text style={{marginTop:10,marginLeft:15,marginBottom:10}}>粉丝可见</Text>
          <View style={style.agree}><Text onPress={fans?disFans:getFans}>{fans?<View style={style.circle}><Text onPress={fans?disFans:getFans}></Text></View>:null}</Text></View>
        </View>
        <View>
          <Text style={{marginTop:10,marginLeft:15,marginBottom:5}}>仅自己可见</Text>
          <View style={style.agree}><Text onPress={oneself?disOneself:getOneself}>{oneself?<View style={style.circle}><Text onPress={oneself?disOneself:getOneself}></Text></View>:null}</Text></View>
        </View>
    </View>:null}
    </>
  );
}
const style = StyleSheet.create({
    first:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:25
    },second:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
    },third:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly',
        textAlign:'center'
    },end:{
        position:'absolute',
        width:'100%',
        backgroundColor:'white',
        top:600,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        display:'flex',
    }, tagContainer: {
        width:50,
        height:22,
        backgroundColor:'#3D89FB',
        borderRadius:8,
        marginTop:20,
        marginLeft:24,

      },
      inactiveTag: {
        backgroundColor:'white',
        elevation:1,
        borderRadius:10
      },
      activeTag: {
        backgroundColor: '#3D89FB',
        color: '#fff',
      },activetext:{
        textAlign:'center',
        color:'white'
      },inactivetext:{
        textAlign:'center',
        color:'#111313'
      },agree:{
        width:10,
        height:10,
        borderRadius:5,
        borderColor:'#000000',
        borderWidth:1,
        position:'absolute',
        marginLeft:360,
        marginTop:20
      },circle:{
        width:8,
        height:8,
        borderRadius:5,
        backgroundColor:'#D8D8D8',
      }
})