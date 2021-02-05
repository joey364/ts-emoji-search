import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import EmojiResults from './EmojiResults';
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
    <SafeAreaView style={styles.droidSafeArea}>
      <StatusBar style="auto" />
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    orientation: 'potrait',
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
