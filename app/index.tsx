import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/health" style={styles.link}>
        <Text style={styles.linkText}>(Health)</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    padding: 20,
    backgroundColor: '#dee2e6',
    borderRadius: 10,
  },
  linkText: {
    fontSize: 18,
    color: '#2e78b7',
  },
});
