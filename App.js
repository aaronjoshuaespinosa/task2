import { Text, View, TouchableOpacity, Image} from 'react-native';

import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.mainContainer}>

      <Image
      style={styles.background}
      source={require('./assets/bg.jpg')}
      />
      <View style={styles.container}>
        <View style={styles.tdContainer}>
          <Text style={styles.time}>3:00 PM</Text>
          <Text style={styles.date}>October 29, 2022</Text>
        </View>
        <View style={styles.secondaryContainer}>
          <View style={styles.socMedContainer}>
            <TouchableOpacity style={styles.icon}>
              <Image
                style={styles.imgIcon}
                source={require('./assets/facebook.png')}
              />
              <Text style={styles.txtIcon}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
              <Image
                style={styles.imgIcon}
                source={require('./assets/twitter.png')}
              />
              <Text style={styles.txtIcon}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
              <Image
                style={styles.imgIcon}
                source={require('./assets/instagram.png')}
              />
              <Text style={styles.txtIcon}>Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
              <Image
                style={styles.imgIcon}
                source={require('./assets/github.png')}
              />
              <Text style={styles.txtIcon}>Gihub</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
              <Image
                style={styles.imgIcon}
                source={require('./assets/discord.png')}
              />
              <Text style={styles.txtIcon}>Discord</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}