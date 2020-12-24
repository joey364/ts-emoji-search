import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EmojiResultsRow = ({ emoji }: any) => {
  // const codePointHex = emojiData.symbol.codePointAt(0).toString(16);
  // const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return (
    <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
      <Text style={{ fontSize: 32, flex: 1 }}>{emoji.symbol}</Text>
      <Text style={{ fontSize: 16, color: '#666' }}>{emoji.title}</Text>
    </View>
  );
};

export default EmojiResultsRow;

const styles = StyleSheet.create({});
