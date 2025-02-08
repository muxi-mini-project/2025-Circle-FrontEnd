import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';
export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor:'#3D89FB',height:'100%',width:'100%'}}>
      <View style={{margin:10,flexDirection:'row'}}>
      <Text onPress={()=>{navigation.goBack()}}><FontAwesome size={35} color={'white'} name='angle-left'/></Text>
      </View>

      <View>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'white',fontSize:15,marginLeft:50,marginTop:20}}>选择</Text>
        <Text style={{color:'white',fontSize:15,marginLeft:30,marginTop:20}}>一种</Text>
        <Text style={{color:'white',fontSize:30,marginLeft:0,marginTop:3}}>题型</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'white',fontSize:15,marginLeft:50,marginTop:20}}>开启你的</Text>
        <Text style={{color:'white',fontSize:30,marginLeft:0,marginTop:3}}>编题</Text>
        <Text style={{color:'white',fontSize:15,marginLeft:0,marginTop:20}}>之旅吧！</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.container,{marginTop:120}]} 
        onPress={() => navigation.navigate('one')}
      >
        <Text style={{textAlign:'center',marginTop:13,fontSize:20}}>单选题</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.container,{marginTop:60}]} 
        onPress={() => navigation.navigate('more')}
      >
        <Text style={{textAlign:'center',marginTop:13,fontSize:20}}>多选题</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.container,{marginTop:60}]} 
        onPress={() => navigation.navigate('choose')}
      >
        <Text style={{textAlign:'center',marginTop:13,fontSize:20}}>判断题</Text>
      </TouchableOpacity>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 55,
    backgroundColor: 'white',
    marginLeft: 48,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 10,
  },
});


