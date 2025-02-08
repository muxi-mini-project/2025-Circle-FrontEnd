import { View, Text ,StyleSheet} from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
export default function Practice() {
  const navigation = useNavigation()
  const handleOptionPress = () => {
    navigation.navigate('next');
  }
  return (
    <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
    <View style={{margin:10,flexDirection:'row'}}>
      <Text onPress={()=>{navigation.goBack()}}><FontAwesome size={35} name='angle-left'/></Text>
      <Text style={{textAlign:'center',fontSize:18,marginLeft:150}}>练习场</Text>
    </View>
    <View>
        <View style={styles.questions}>
            <Text style={{textAlign:'center'}}></Text>
        </View>
        <View style={styles.hard}><Text>难度星数</Text></View>
        <View style={{marginLeft:50}}>
          <TouchableOpacity style={styles.choose} onPress={handleOptionPress}>
            <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
              <Text>A.</Text>
              <Text>XXXXXXXXXXXXXX</Text>
            </View>                
          </TouchableOpacity>
        </View>
        <View style={{marginLeft:50}}>
          <TouchableOpacity style={styles.choose} onPress={handleOptionPress}>
            <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
              <Text>B.</Text>
              <Text></Text>
            </View>                
          </TouchableOpacity>
        </View>
        <View style={{marginLeft:50}}>
          <TouchableOpacity style={styles.choose} onPress={handleOptionPress}>
            <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
              <Text>C.</Text>
              <Text></Text>
            </View>                
          </TouchableOpacity>
        </View>
        <View style={{marginLeft:50}}>
          <TouchableOpacity style={styles.choose} onPress={handleOptionPress}>
            <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
              <Text>D.</Text>
              <Text></Text>
            </View>                
          </TouchableOpacity>
        </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  questions:{
    width:300,
    height:100,
    backgroundColor:'#3083FE',
    top:50,
    left:50,
    borderRadius:15
  },hard:{
    marginTop:50,
    marginLeft:220
  },choose:{
    marginTop:30,marginLeft:0,
    width:300,
    height:60,
    elevation:5,
    borderRadius:10,
    backgroundColor:'white',
  }
})