import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { View , Image,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function TabLayout() {
  const [add,setAdd]=useState(false)
  const getAdd=()=>{
    setAdd(true)
  }
  const hideAdd=()=>{
    setAdd(false)
  }
  return (
    <>
    
    <Tabs screenOptions={{tabBarActiveTintColor: '#111313',tabBarStyle:{display:'flex'}}}>
      <Tabs.Screen
        name="shouye"
        options={{
          title:'首页',headerShown:false,tabBarLabelStyle:{fontSize:16,fontFamily:'Source Han Sans-Bold',position:'absolute',marginTop:5},
          tabBarIcon: ({ color }) => <FontAwesome size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="myself"
        options={{
          title: '我的',headerShown:false,tabBarLabelStyle:{fontSize:16,fontFamily:'Source Han Sans-Bold',position:'absolute',marginTop:5},
          tabBarIcon: ({ color }) => <FontAwesome size={28} color={color} />,
        }}
      />
    </Tabs>
    <View style={{position:'absolute',bottom:0,marginLeft:156.5,width:80,height:49,backgroundColor:'white'}}>
    <View style={{marginTop:7,marginLeft:28}}>
    <FontAwesome onPress={add?hideAdd:getAdd} size={28} name='plus-square' color='#3D89FB'/>
    </View> 
    </View>

    {add&&
    <View style={{position:'absolute',bottom:50,marginLeft:146.5,width:100,height:102,backgroundColor:'white',borderWidth:1,borderColor:'gray'}}>
      <View style={{borderBottomWidth:1.5,borderColor:'gray'}}><Link style={{textAlign:'center',marginTop:8,marginBottom:5}} href={'/inscribe'}>创圈</Link></View>
      <View style={{borderBottomWidth:1.5,borderColor:'gray'}}><Link style={{textAlign:'center',marginTop:8,marginBottom:5}} href={'/inscribe'}>编题</Link></View>
      <View style={{borderBottomWidth:1.5,borderColor:'gray'}}><Link style={{textAlign:'center',marginTop:8,marginBottom:5}} href={'/paper'}>组卷</Link></View>
    </View>
    }
    </>
  );
}
