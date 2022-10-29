import { Text, View, TouchableOpacity, Image } from 'react-native';

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
          <TouchableOpacity>
            <Image
              style={styles.imgIcon}
              source={require('./assets/facebook.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imgIcon}
              source={require('./assets/twitter.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imgIcon}
              source={require('./assets/instagram.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imgIcon}
              source={require('./assets/github.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imgIcon}
              source={require('./assets/discord.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}