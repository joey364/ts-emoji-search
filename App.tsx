import { Image } from '@material-ui/icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import EmojiResults from './EmojiResults';
import EmojiResultsRow from './EmojiResultsRow';
import filterEmoji from './filterEmoji';
import Header from './Header';
import SearchInput from './SearchInput';

const App = () => {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji('', 20));

  const handleSearchChange = (serachValue: any) => {
    setFilteredEmoji(filterEmoji(serachValue, 20));
  };
  const emojiOne = filteredEmoji[0];
  return (
    <SafeAreaView style={styles.droidSafeAra}>
      <StatusBar style="auto" />
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
      {/* <ScrollView style={{ flex: 1, margin: 16 }}>
        {filteredEmoji.map((emoji) => (
          <View style={{ display: 'flex', flexDirection: 'row', flex: 1,  }}>
            <Text style={{ fontSize: 32, flex: 1 }}>{emoji.symbol}</Text>
            <Text style={{ fontSize: 16 }}>{emoji.title}</Text>
          </View>
        ))}
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeAra: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  container: {
    flex: 1,
    backgroundColor: '#aea489',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;
