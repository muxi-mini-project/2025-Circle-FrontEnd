import { Button, Image, ScrollView, StyleSheet, TextInput ,TouchableOpacity} from 'react-native';
import { View , Text ,Alert} from 'react-native';
import { useState } from 'react';
import React from 'react';
import { navigate } from 'expo-router/build/global-state/routing';
import { useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
export default function SendPage() {
  const navigation = useNavigation()
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
  const [activeId, setActiveId] = useState(null)
  const [activetext,setActivetext]=useState('tag')    
    const handlePress = (id,text) => {
        setActiveId(id);
        setActivetext(text)
      };
    
    const getTagStyle = (id) => {
        return activeId === id ? style.activeTag : style.inactiveTag;
      };
    const getTextStyle = (id) => {
        return activeId === id ? style.activetext : style.inactivetext
      }
    


    const [circle,setCircle]=useState(false)
    const getCircle=()=>{
    setCircle(true)
    }
    const unCircle=()=>{
        setCircle(false)
    }

    const [inputText, setInputText] = useState('');
    const [analysisText, setAnalysisText] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <>
    <View style={{height:75,backgroundColor:'white'}}>
     <View style={style.first}>
        <Text onPress={()=>{navigation.goBack()}}><FontAwesome size={28} name='angle-left'/></Text>
        <Text style={{width:50,height:22,backgroundColor:'#3D89FB',color:'white',borderRadius:7,textAlign:'center'}}>发布</Text>
    </View>   
    </View>

    <ScrollView>
    <View style={{height:150, backgroundColor:'white'}}>
      <View style={style.inputContainer}>
        {!inputText && (
          <Text style={style.placeholder}>
            题目内容（文字）
          </Text>
        )}
        <TextInput 
          maxLength={50} 
          style={style.input}
          value={inputText}
          onChangeText={setInputText}
          multiline={true}
          textAlignVertical="top"
        />
      </View>   
    </View>

    <View style={{height:30,marginTop:1}}> 
        <Text style={{marginLeft:"90%",marginTop:5}}>答案</Text>
    </View>
    
      
    <View style={{width:'100%',backgroundColor:'white'}}>
  {['A', 'B', 'C', 'D'].map((option) => (
    <View key={option} style={[style.choose, {marginTop: option === 'A' ? 10 : 25},{marginBottom:option === 'D'? 15 : 0}]}>
      <Text style={{marginTop:15,marginLeft:10,fontSize:20}}>{option}:</Text>
      <TextInput style={{marginTop:8,marginLeft:10,}} maxLength={30} placeholder='请输入选项内容'/>
      <TouchableOpacity 
        style={style.circle1} 
        onPress={() => {
          setSelectedOptions(prevOptions => {
            if (prevOptions.includes(option)) {
              return prevOptions.filter(item => item !== option);
            } else {
              return [...prevOptions, option];
            }
          });
        }}
      >
        {selectedOptions.includes(option) && <View style={style.circle2}></View>}
      </TouchableOpacity>
    </View>
  ))}
</View>



    <View style={{height:50,backgroundColor:'white',marginTop:1}}>
     <Text style={{marginTop:15,marginLeft:25,fontSize:16}}>选择圈子</Text>
     <View style={{marginLeft:100,position:'absolute',marginTop:18,width:45,height:20,backgroundColor:'#3D89FB',borderRadius:8,}}>
     <Text style={{marginLeft:8,fontSize:13,color:'white'}}>{activetext}</Text>
     </View>
     <FontAwesome onPress={circle?unCircle:getCircle} size={28} name={circle?'angle-up':'angle-down'} style={{top:15,right:15,position:'absolute'}} />
    </View>

      {circle&&<View style={style.end}>
            <View style={{flexDirection:'row',flexWrap:'wrap',marginBottom:20}}>
            {tags.map((tag) => (
            <View key={tag.id} style={[style.tagContainer, getTagStyle(tag.id)]}>
          <Text onPress={() => handlePress(tag.id,tag.text)} style={getTextStyle(tag.id)}>{tag.text}</Text>                
            </View>
          ))}      
            </View>
      </View>}

    <View style={{height:50,backgroundColor:'white',marginTop:1}}>
     <Text style={{marginTop:15,marginLeft:25,fontSize:16}}>难度星数:</Text>
    </View>

    <View style={{backgroundColor:'white', marginTop:1, paddingVertical: 15}}>
  <Text style={{marginLeft:25, fontSize:16}}>答案解析:</Text>
  <View style={{position: 'relative',marginLeft: 20,marginRight: 20,}}>
    {!analysisText && (
      <View style={style.analysisPlaceholder}>
        <Text style={{color: 'gray'}}>请输入...</Text>
      </View>
    )}
    <TextInput
      maxLength={200}  
      style={style.analysisInput}
      multiline={true}
      textAlignVertical="top"
      value={analysisText}
      onChangeText={setAnalysisText}
    />
  </View>
</View>


    </ScrollView>
    
    
    </>
  );
}
const style = StyleSheet.create({
    first:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:25
    },third:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly',
        textAlign:'center'
    },end:{
        width:'100%',
        backgroundColor:'white',
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
      },inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 130,
        backgroundColor: '#3D89FB',
        position: 'relative',
      },
      input: {
        fontSize: 20,
        color: 'white',
        padding: 10,
        height:130,
      },
      placeholder: {
        position: 'absolute',
        left: 100,
        top: 50, 
        fontSize: 20,
        color: 'rgba(255,255,255,0.7)',
      },choose:{
        flexDirection:'row',
        marginLeft:20,
        width:300,
        height:50,
        backgroundColor:'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
         width: 2,
         height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },analysisInput: {
        fontSize: 20,
        padding: 10,
        height:80,
      },analysisPlaceholder: {
        position: 'absolute',
        left: 130,
        top: 25, 
        fontSize: 20,
        color: 'rgba(255,255,255,0.7)',
      },circle1:{
        width:30,
        height:30,
        borderWidth:1,
        borderRadius:15,
        borderColor:'#3D89FB',
        marginLeft:180,
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      circle2:{
        width:24,
        height:24,
        borderRadius:12,
        backgroundColor:'#3D89FB',
      },
})