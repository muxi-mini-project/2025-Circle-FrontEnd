import { Redirect } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Image , Dimensions, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState , useEffect } from 'react';


const { width } = Dimensions.get('window');
const itemMargin = 5;
const itemVerticalMargin = 10;

export default function Tab() {
  const tags = [
    {id:1,text:'练习过的题'},
    {id:2,text:'答过的卷'},
    {id:3,text:'我编的题'},
    {id:4,text:'我组的卷'},
]
const [activeId, setActiveId] = useState(1) 
const handlePress = (id) => {
  setActiveId(id);
};

const getTagStyle = (id) => {
  return activeId === id ? styles.activeTag : styles.inactiveTag;
};
const getTextStyle = (id) => {
  return activeId === id ? styles.activetext : styles.inactivetext
}


  const [leftColumn, setLeftColumn] = useState([]);
  const [rightColumn, setRightColumn] = useState([]); 
  useEffect(() => {
      const data = [
        {id:1, title:'标题1', author:'作者1', circle:'圈子1', love:100, image: 'https://picsum.photos/200/300'},
        {id:2, title:'标题2', author:'作者2', circle:'圈子2', love:50, image: 'https://picsum.photos/200/200'},
        {id:3, title:'标题3', author:'作者3', circle:'圈子3', love:80, image: 'https://picsum.photos/200/400'},
        {id:4, title:'标题4', author:'作者4', circle:'圈子4', love:50, image: 'https://picsum.photos/200/250'},
        {id:5, title:'标题5', author:'作者5', circle:'圈子5', love:30, image: 'https://picsum.photos/200/350'},
        {id:6, title:'标题6', author:'作者6', circle:'圈子6', love:60, image: 'https://picsum.photos/200/280'},
      ].map(item => ({
        ...item,
        height: Math.floor(Math.random() * 100) + 220,
      }));
  
      setLeftColumn(data.filter((_, index) => index % 2 === 0));
      setRightColumn(data.filter((_, index) => index % 2 !== 0));
    }, []);
  const renderItem = (item) => (
      <View key={item.id} style={[styles.page, { height: item.height }]}>
        <Link href='/sheet'>
        <Image source={{ uri: item.image }} style={[styles.image, { height: item.height - 80 }]} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.authorContainer}>
            <View style={styles.avatar}></View>
            <View>
              <Text>{item.author}</Text>
              <Text>{item.circle}</Text>
            </View>
            <TouchableOpacity style={styles.likeButton}>
              <Text style={{color: '#3D89FB'}}>{item.love}</Text>
            </TouchableOpacity>
          </View>
        </View>  
        </Link>
      </View>
    );
  return (
    <View style={styles.container}>
      <View style={{position:'absolute'}}><Link style={{marginTop:15,marginLeft:24,}} href={'/setting'}><FontAwesome size={30} name="bars" /></Link></View>
      <ScrollView>
      <View style={styles.box}>
        <View style={styles.head}><Image/></View>

        <Text style={{textAlign:'center',marginTop:60}}>用户名</Text>
        <Text style={{textAlign:'center',marginTop:10}}>简介：<Text></Text></Text>

        <View style={{justifyContent:'space-evenly',flexDirection:'row',marginTop:20}}>
              <View style={[{margin:20}]}>
                  <Text style={{textAlign:'center'}}></Text>
                  <Text style={{textAlign:'center',marginTop:10}}>总练习题数</Text>
              </View>
              <View style={[{margin:20}]}>
                  <Text style={{textAlign:'center'}}></Text>
                  <Text style={{textAlign:'center',marginTop:10}}>答对题数</Text>
              </View>
              <View style={[{margin:20}]}>
                  <Text style={{textAlign:'center'}}></Text>
                  <Text style={{textAlign:'center',marginTop:10}}>正确率</Text>
              </View>
        </View>

        <View style={{flexDirection:'row',top:30,left:10,}}>
        {tags.map((tags)=>(
          <View key={tags.id} style={[styles.message, getTagStyle(tags.id)]}>
            <Text onPress={() => handlePress(tags.id)} style={[styles.text,getTextStyle(tags.id)]}>{tags.text}</Text>
          </View>
        ))}
        </View>
        
        {(activeId === 1 || activeId === 3)&& <View style={{marginTop:50,borderTopWidth:1}}>
          <View style={styles.questions}> 
          <View style={{marginLeft:25}}><Text>题目</Text></View>
          <View style={styles.choose}>
            <Text>A:   </Text>
            <Text>XXXXXXXXXXXXXX</Text>
          </View>
          <View style={styles.choose}>
            <Text>B:   </Text>
            <Text>XXXXXXXXXXXXXX</Text>
          </View>
          <View style={styles.choose}>
            <Text>C:   </Text>
            <Text>XXXXXXXXXXXXXX</Text>
          </View>
          <View style={[styles.choose,{marginBottom:15}]}>
            <Text>D:   </Text>
            <Text>XXXXXXXXXXXXXX</Text>
          </View>
          </View>

          <View style={styles.questions}> 
          <View style={{marginLeft:25}}><Text>题目</Text></View>
          <View style={styles.choose}>
            <Text>A:   </Text>
            <Text>XXXXXXXXXXXXXX</Text>
          </View>
          <View style={styles.choose}>
            <Text>B:   </Text>
            <Text>XXXXXXXXXXXXXX</Text>
          </View>
          <View style={styles.choose}>
            <Text>C:   </Text>
            <Text>XXXXXXXXXXXXXX</Text>
          </View>
          <View style={[styles.choose,{marginBottom:15}]}>
            <Text>D:   </Text>
            <Text>XXXXXXXXXXXXXX</Text>
          </View>
          </View>
        </View>}
        
        {(activeId === 2 || activeId === 4) && 
        <View style={styles.columnsContainer}>
          <View style={styles.column}>{leftColumn.map(renderItem)}</View>
          <View style={styles.column}>{rightColumn.map(renderItem)}</View>
        </View>}
         
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'#3D89FB'
  },box:{
    width:'100%',
    height:"160%",
    marginTop:160,
    backgroundColor:'white',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },head:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'white',
    borderWidth:1,
    position:'absolute',
    marginLeft:148,
    marginTop:-50,
  },message:{
    marginLeft:10,
    width:80,
    height:25,
    borderRadius:10
  },text:{
    textAlign:'center',
    marginTop:2
  },
  inactiveTag: {
    backgroundColor:'#D8D8D8',
  },
  activeTag: {
    backgroundColor: '#3D89FB',
  },activetext:{
    color:'white'
  },inactivetext:{
    color:'#111313'
  },choose:{
    flexDirection:'row',
    marginLeft:20,
    marginTop:10
  },questions:{
    marginTop:10,
    borderBottomWidth:1
  },scrollViewContent: {
    flexGrow: 1,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: itemMargin,
    marginTop:50
  },
  column: {
    width: (width - itemMargin * 3) / 2,
  },
  page: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: itemVerticalMargin,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    height: 80,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'gray',
    marginRight: 10,
  },
  likeButton: {
    paddingHorizontal: 10,
    marginLeft:40
  },
});