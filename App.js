import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import './src/hooks/i18n.js';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (langCode) => {
    console.log("Language code")
    i18n
      .changeLanguage(langCode)
      .then(() => console.log("language changed successfully"))
      .catch(err => console.log("Error msg", err))
  }

  return (
    <>
    <SafeAreaView style={{
      paddingTop: 190,
      paddingHorizontal: 16
    }}>
      
      <View>
        <Text style={{
          color: '#8252B1',
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          {t('translations:Hello')}
        </Text>
        <TouchableOpacity onPress={() => changeLanguage('en')}
          style={{
            backgroundColor: 'powderblue',
            marginTop: 10,
            paddingHorizontal: 10
          }}>
          <Text style={{
            color: '#444',
            fontSize: 28,
            fontWeight: '600'
          }}>
            English
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => changeLanguage('tn')}
          style={{
            backgroundColor: 'tomato',
            marginTop: 10,
            paddingHorizontal: 10
          }}>
          <Text style={{
            color: '#444',
            fontSize: 28,
            fontWeight: '600'
          }}>
            தமிழ்
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => changeLanguage('fn')}
          style={{
            backgroundColor: 'powderblue',
            marginTop: 10,
            paddingHorizontal: 10
          }}>
          <Text style={{
            color: '#444',
            fontSize: 28,
            fontWeight: '600'
          }}>
            Français
          </Text>
        </TouchableOpacity>
      </View>


      <View>
        <TouchableOpacity onPress={() => changeLanguage('hn')}
          style={{
            backgroundColor: 'tomato',
            marginTop: 10,
            paddingHorizontal: 10
          }}>
          <Text style={{
            color: '#444',
            fontSize: 28,
            fontWeight: '600'
          }}>
            हिन्दी
          </Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
    </>
  );
};



