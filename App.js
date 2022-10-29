import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Text>3:00 PM</Text>
          <Text>October 29, 2022</Text>
        </View>
        <View style={styles.socMedContainer}>
          <TouchableOpacity style={styles.icon}>
            <Text>FB</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <Text>Twitter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <Text>Insta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}