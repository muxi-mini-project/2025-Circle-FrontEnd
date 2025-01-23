import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { View , Image,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
export default function TabLayout() {

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
        name="addpage"
        options={{
          title: '',headerShown:false,tabBarStyle:{display:'none'},
          tabBarIcon: ({ color }) => <FontAwesome size={28} name='plus-square' color='#3D89FB'/>,
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
    </>
  );
}
