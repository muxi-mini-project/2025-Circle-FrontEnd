import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
const options = ['A', 'B', 'C', 'D'];
const judgmentoptions = ['A','B']
export default function Practice() {
  const router = useRouter();
  const navigation = useNavigation()
  const toEnd=()=>{
    navigation.navigate('end')
  }

  const [selectedOption, setSelectedOption] = useState(null);
  const renderOption = (option) => (
    <View key={option} style={{marginLeft:50}}>
      <TouchableOpacity 
        style={[
          styles.choose, 
          selectedOption === option && styles.selectedChoose
        ]}
        onPress={() => setSelectedOption(option)}
      >
        <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
          <Text>{option}.</Text>
          <Text>{'XXXXXXXXXXXXXX'}</Text>
        </View>                
      </TouchableOpacity>
    </View>
  );
  
  const [selectedOptions, setSelectedOptions] = useState([]);
  const moreOption = (option) => (
    <View key={option} style={{marginLeft:50}}>
      <TouchableOpacity 
        style={[
          styles.choose, 
          selectedOptions.includes(option) && styles.selectedChoose
        ]}
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
        <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
          <Text>{option}.</Text>
          <Text>{'XXXXXXXXXXXXXX'}</Text>
        </View>                
      </TouchableOpacity>
    </View>
  );
  
  const judgment = (option) => (
    <View key={option} style={{marginLeft:50}}>
      <TouchableOpacity 
        style={[
          styles.choose, 
          selectedOption === option && styles.selectedChoose
        ]}
        onPress={() => setSelectedOption(option)}
      >
        <View style={{marginTop:15,marginLeft:20,flexDirection:'row'}}>
          <Text>{option}.</Text>
          <Text>{'XXXXXXXXXXXXXX'}</Text>
        </View>                
      </TouchableOpacity>
    </View>
  );
  
  const a="单选题"
  const b="多选题"
  const c="判断题"
  const [questionstyle,setQuestionstyle]=useState(b)

  return (
    <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>
      <View style={{margin:10,flexDirection:'row'}}>
        <Text onPress={() => router.back()}>
          <FontAwesome size={35} name='angle-left'/>
        </Text>
        <Text style={{textAlign:'center',fontSize:18,marginLeft:150}}>卷子标题</Text>
      </View>

      <View>
        <View style={styles.questions}>
          <Text style={{textAlign:'center',marginTop:40,color:'white'}}>题目</Text>
        </View>
        <View style={styles.hard}><Text>{questionstyle}</Text></View>
        {questionstyle=="单选题" && options.map(renderOption)}
        {questionstyle=="多选题" && options.map(moreOption)}
        {questionstyle=="判断题" && judgmentoptions.map(judgment)}
        <View style={styles.sure}><Text onPress={toEnd} style={{textAlign:'center',marginTop:10,color:'white'}}>提交</Text></View>
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
  },
  hard:{
    marginTop:50,
    marginLeft:300
  },
  choose:{
    marginTop:30,
    marginLeft:0,
    width:300,
    height:60,
    elevation:5,
    borderRadius:10,
    backgroundColor:'white',
  },
  selectedChoose: {
    backgroundColor: '#3083FE',
  },sure:{
    marginTop:50,
    marginLeft:145,
    width:110,
    height:40,
    elevation:5,
    borderRadius:10,
    backgroundColor:'#3083FE',
  }
});
