import { Redirect } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>我的</Text>
      <Link href={"/"}>去登录</Link> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});