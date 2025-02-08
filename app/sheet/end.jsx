import { View, Text ,StyleSheet, ScrollView} from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
export default function Practice() {
  const navigation = useNavigation()
  const toReport=()=>{
    navigation.navigate('report')
  }
  return (
    <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
    <View style={styles.line}>
      <Text style={{marginTop:10,marginLeft:20,width:80}} onPress={()=>{navigation.goBack()}}><FontAwesome size={40} name='angle-left'/></Text>
    </View>

    <ScrollView>
    <View style={{marginTop:20,marginLeft:20}}>
    <View style={styles.picture}></View>
    <View style={{position:'absolute',marginLeft:150}}>
    <Text style={{fontSize:25,fontWeight:'bold'}}>标题</Text>
    <Text style={{fontSize:18,marginTop:5}}>作者</Text>
    <Text style={{fontSize:16,marginTop:5}}>难度星数：</Text>
    <Text style={{fontSize:16,marginTop:5}}>#圈子</Text>
    <Text style={{fontSize:16,marginTop:5}}>简介......</Text>
    </View>
    <View style={{position:'absolute',marginLeft:280,marginTop:50}}>
    <Text>点赞</Text>
    </View>
    </View>


    <View style={styles.box1}>
      <View style={styles.score}>
        <Text style={{fontSize:53,color:'#3D89FB',textAlign:'center',marginTop:5}}>90</Text>
      </View>
      <View style={[styles.box2,{backgroundColor:'white'}]}>
        <Text style={{marginTop:15,fontSize:20,marginLeft:60}}>排名</Text>
        <Text style={{marginTop:15,fontSize:20,marginLeft:140}}>1</Text>
      </View>
      <View style={[styles.box2,{backgroundColor:'blue'}]}>
      <Text style={{marginTop:15,fontSize:20,marginLeft:60,color:'white'}}>用时</Text>
      <Text style={{marginTop:15,fontSize:20,marginLeft:120,color:'white'}}>22:22</Text>
      </View>
      <View style={[styles.box2,{backgroundColor:'blue'}]}>
      <Text style={{marginTop:15,fontSize:20,marginLeft:60,color:'white'}}>详情</Text>
      <Text onPress={toReport} style={{marginTop:18,fontSize:17,marginLeft:80,color:'white'}}>点击查看报告</Text>
      </View>
    </View> 

      <View style={{marginLeft:25,marginRight:25}}>
                   <View style={{flexDirection:'row',position:'absolute',marginTop:20}}>
                   <View style={styles.head}><Image></Image></View>
                   <Text style={{marginTop:20,marginLeft:20}}>用户名</Text>
                   </View>
      
                   <View style={{flexDirection:'row',position:'absolute',marginTop:30,marginLeft:300}}>
                      <Text>50</Text>
                       
                   </View> 
                   <View style={styles.content}>
                      <Text style={{textAlign:'center'}}>内容</Text>
                   </View> 
                   <View style={{marginTop:20,marginBottom:50,flexDirection:'row',marginLeft:220}}>
                     <Text>2025.2.4</Text>
                     <Text style={{marginLeft:30}}>回复</Text>
                   </View> 
                   </View>
    </ScrollView>

    </View>
  );
}
const styles = StyleSheet.create({
  line: {
    borderBottomWidth:1,
    borderColor:'gray'
  },picture:{
    width:140,
    height:140,
    backgroundColor:'gray',
    borderRadius:15,
  },box1:{
    width:350,
    height:430,
    backgroundColor:'#3D89FB',
    borderRadius:15,
    marginTop:20,
    marginLeft:20
  },score:{
    width:80,
    height:80,
    borderRadius:10,
    backgroundColor:'white',
    marginLeft:135,
    marginTop:30,
  },box2:{
    width:300,
    height:60,
    borderRadius:10,
    marginTop:15,
    marginLeft:25,
    flexDirection:'row'
  },head:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'gray',
    marginTop:5,
    marginLeft:10
  },content:{
    width:280,
    height:70,
    backgroundColor:'gray',
    marginTop:80,
    marginLeft:30,
    borderRadius:10,

  }
})