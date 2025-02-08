import { linkTo } from 'expo-router/build/global-state/routing';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');
const itemMargin = 5;
const itemVerticalMargin = 10;

export default function Find() {
  const [activeNav, setActiveNav] = useState('recommend');
  const [leftColumn, setLeftColumn] = useState([]);
  const [rightColumn, setRightColumn] = useState([]); 
  const navItems = [
    { id: 'recommend', title: '推荐' },
    { id: 'favor', title: '最热' },
    { id: 'new', title: '最新' },
    { id: 'follow', title: '关注' },
  ];

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
      <View style={styles.navBar}>
        {navItems.map(({ id, title }) => (
          <TouchableOpacity
            key={id}
            style={[styles.navItem, activeNav === id && styles.activeNavItem]}
            onPress={() => setActiveNav(id)}
          >
            <Text style={[styles.navText, activeNav === id && styles.activeNavText]}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.columnsContainer}>
          <View style={styles.column}>{leftColumn.map(renderItem)}</View>
          <View style={styles.column}>{rightColumn.map(renderItem)}</View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 36,
    backgroundColor: 'white',
  },
  navItem: {
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  activeNavItem: {
    backgroundColor: '#3D89FB',
    borderRadius: 15,
  },
  navText: {
    fontSize: 16,
    color: 'black',
  },
  activeNavText: {
    color: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: itemMargin,
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
