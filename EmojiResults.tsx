import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import EmojiResultsRow from './EmojiResultsRow';

const EmojiResults = ({ emojiData }: any) => {
  return (
    <ScrollView style={{ flex: 1, margin: 16 }}>
      {emojiData.map((emoji: any) => (
        <EmojiResultsRow key={emoji.title} emoji={emoji} />
      ))}
    </ScrollView>
  );
};

export default EmojiResults;

const styles = StyleSheet.create({});

// <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
//   <Text style={{ fontSize: 32, flex: 1 }}>{emoji.symbol}</Text>
//   <Text style={{ fontSize: 16 }}>{emoji.title}</Text>
// </View>
