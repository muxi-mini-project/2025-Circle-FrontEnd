import { View, Text ,StyleSheet} from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
export default function Practice() {
  const navigation = useNavigation()
  const toStart=()=>{
    navigation.navigate('start')
  }
  return (
    <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
    <View style={styles.line}>
      <Text style={{marginTop:10,marginLeft:20,width:80}} onPress={()=>{navigation.goBack()}}><FontAwesome size={40} name='angle-left'/></Text>
    </View>


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
      <Text style={{fontSize:25,fontWeight:'bold',marginLeft:30,marginTop:15}}>题型介绍</Text>
      <View style={styles.box2}>
        <Text style={{fontSize:18,marginTop:15,marginLeft:15,fontWeight:'bold'}}>ALL 总分</Text>
        <Text style={{fontSize:18,marginTop:18,marginLeft:150,fontWeight:'bold'}}>100</Text>
      </View>
      <View style={styles.box3}>
      <View>
        <Text style={[styles.questions,{fontSize:22}]}>类型</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.questions}>单选题</Text>
        <Text style={styles.score}>5*10分</Text>
      </View>
      <View><Text style={styles.questions}>多选题</Text></View>
      <View><Text style={styles.questions}>判断题</Text></View>
      </View>
    </View>


    <View style={{marginLeft:165,marginTop:20}}><Text style={{fontSize:25}} onPress={toStart}>开始</Text></View>
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
  },box2:{
    width:300,
    height:60,
    backgroundColor:'white',
    borderRadius:10,
    marginTop:15,
    marginLeft:25,
    flexDirection:'row'
  },box3:{
    width:300,
    height:265,
    backgroundColor:'blue',
    borderRadius:13,
    marginTop:15,
    marginLeft:25
  },questions:{
    color:'white',
    marginTop:20,
    marginLeft:80,
    fontSize:16
  },score:{
    color:'white',
    marginTop:20,
    marginRight:15,
    fontSize:16
  }
})