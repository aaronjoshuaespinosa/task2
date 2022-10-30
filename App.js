import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar, Linking } from 'react-native';

import { styles } from './styles';

export default function App() {
  const fbLink = 'https://www.facebook.com/';
  const twtLink = 'https://www.twitter.com/';
  const instaLink = 'https://www.instagram.com/';
  const githubLink = 'https://www.github.com/';
  const discordLink = 'https://www.discord.com/';

  const fbBtn = () => {
    Linking.openURL(fbLink);
  }

  const twtBtn = () => {
    Linking.openURL(twtLink);
  }

  const instaBtn = () => {
    Linking.openURL(instaLink);
  }

  const githubBtn = () => {
    Linking.openURL(githubLink);
  }

  const discordBtn = () => {
    Linking.openURL(discordLink);
  }

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  useEffect(() => {
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const day = new Date().getDay();

    setCurrentDate(
      days[day] + ' | ' + months[month] + ' ' + date + ', ' + year
    );
  });

  useEffect(() => {
    const hour = new Date().getHours();
    const min = new Date().getMinutes();

    setCurrentTime(
      hour + ':' + min
    );
  });

  return (
    <View style={styles.mainContainer}>
      <StatusBar />
      <Image
        style={styles.background}
        source={require('./assets/bg.jpg')}
      />
      <View style={styles.container}>
        <View style={styles.tdContainer}>
          <Text style={styles.time}>{currentTime}</Text>
          <Text style={styles.date}>{currentDate}</Text>
        </View>
        <View style={styles.secondaryContainer}>
          <View style={styles.socMedContainer}>
            <TouchableOpacity style={styles.icon} onPress={fbBtn}>
              <Image
                style={styles.imgIcon}
                source={require('./assets/facebook.png')}
              />
              <Text style={styles.txtIcon}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} onPress={twtBtn}>
              <Image
                style={styles.imgIcon}
                source={require('./assets/twitter.png')}
              />
              <Text style={styles.txtIcon}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} onPress={instaBtn}>
              <Image
                style={styles.imgIcon}
                source={require('./assets/instagram.png')}
              />
              <Text style={styles.txtIcon}>Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} onPress={githubBtn}>
              <Image
                style={styles.imgIcon}
                source={require('./assets/github.png')}
              />
              <Text style={styles.txtIcon}>Github</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} onPress={discordBtn}>
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