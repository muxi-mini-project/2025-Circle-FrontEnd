import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function NextScreen() {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
     <View style={{margin:10,flexDirection:'row'}}>
      <Text onPress={()=>{navigation.goBack()}}><FontAwesome size={35} name='angle-left'/></Text>
      <Text style={{textAlign:'center',fontSize:18,marginLeft:150}}>练习场</Text>
    </View>

    <ScrollView>
     <View>
            <View style={styles.questions}>
                <Text style={{textAlign:'center'}}></Text>
            </View>
            <View style={styles.hard}><Text>难度星数</Text></View>
            <View style={[styles.choose,{backgroundColor:'white'}]}>
                <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
                  <Text>A.</Text>
                  <Text>XXXXXXXXXXXXXX</Text>
                </View>                
            </View>
            <View style={[styles.choose,{backgroundColor:'white'}]}>
                <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
                  <Text>B.</Text>
                  <Text></Text>
                </View>
            </View>
            <View style={[styles.choose,{backgroundColor:'green'}]}>
                <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
                  <Text>C.</Text>
                  <Text></Text>
                </View>
            </View>
            <View style={[styles.choose,{backgroundColor:'red'}]}>
                <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
                  <Text>D.</Text>
                  <Text></Text>
                </View>
            </View>
        </View>

        
        <View style={{marginTop:50,flexDirection:'row'}}>
            <View style={styles.message}>
                <Text style={{textAlign:'center',color:'white',marginTop:20,fontSize:18}}>MUXI</Text>
                <Text style={{textAlign:'center',color:'white',marginTop:10,fontSize:12}}>出题人</Text>
            </View>
            <View style={[styles.message,{marginLeft:1.5}]}>
                <Text style={{textAlign:'center',color:'white',marginTop:20,fontSize:18}}>100</Text>
                <Text style={{textAlign:'center',color:'white',marginTop:10,fontSize:12}}>答题总人数</Text>
            </View>
            <View style={[styles.message,{marginLeft:1.5}]}>
                <Text style={{textAlign:'center',color:'white',marginTop:20,fontSize:18}}>80%</Text>
                <Text style={{textAlign:'center',color:'white',marginTop:10,fontSize:12}}>正确率</Text>
            </View>
        </View>

        <View>
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
        </View>   
    </ScrollView>
    
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
        marginLeft:50
      },message:{
        width:130,
        height:80,
        backgroundColor:'#3083FE',
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
});
