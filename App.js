import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar, Linking } from 'react-native';

import { styles } from './styles';

export default function App() {

  // toggle
  const [toggle, setToggle] = useState(false);

  const dtToggle = () => {
    setToggle((current) => !current)
  }

  // months
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

  // days
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  // araw
  const araw = [
    'Linggo',
    'Lunes',
    'Martes',
    'Miyerkules',
    'Huwebes',
    'Biyernes',
    'Sabado'
  ];

  // set links
  const fbLink = 'https://www.facebook.com/';
  const twtLink = 'https://www.twitter.com/';
  const instaLink = 'https://www.instagram.com/';
  const githubLink = 'https://www.github.com/';
  const discordLink = 'https://www.discord.com/';

  // get links
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

  // set date and time
  const [currentDateDef, setCurrentDateDef] = useState('');
  const [currentDateSlsh, setCurrentDateSlsh] = useState('');
  const [currentTimeDef, setCurrentTimeDef] = useState('');
  const [currentTimeMil, setCurrentTimeMil] = useState('');

  // get date and time
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var day = new Date().getDay();
  var hour = new Date().getHours();
  var min = new Date().getMinutes();
  var meridiem = ('');
  var dayWord = ('');
  var arawWord = ('');
  
  // set date and time
  useEffect(() => {
    // set AM or PM
    if(hour > 11) {
      meridiem = 'PM';  
    }
    else if(hour <= 11) {
      meridiem = 'AM';
    }

    // remove military time
    if(hour > 12) {
      hour = hour - 12;
    }

    if(min <= 9) {
      min = '0' + min;
    }

    dayWord = days[day];
    arawWord = araw[day];

    setCurrentDateDef(
      dayWord + ' | ' + months[month-1] + ' ' + date + ', ' + year
      
    );
    
    setCurrentTimeDef(
      hour + ':' + min + ' ' + meridiem
    );

    setCurrentDateSlsh(
      arawWord + ' | ' + month + '/' + date + '/' + year
      
    );
    
    setCurrentTimeMil(
      hour + 12 + ':' + min
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
        <TouchableOpacity style={styles.tdContainer} onPress={dtToggle}>
          <Text style={styles.time} >{toggle ? currentTimeMil : currentTimeDef}</Text>
          <Text style={styles.date}>{toggle ? currentDateSlsh : currentDateDef}</Text>
        </TouchableOpacity>

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