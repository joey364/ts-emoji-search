import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>💣 Emoji Search 🔥 </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    padding: 16,
    margin: 'auto',
  },

  textStyle: {
    color: '#667',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  textInputStyle: {
    margin: 'auto',
    height: 40,
    width: 720,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
});
