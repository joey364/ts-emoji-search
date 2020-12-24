import React from 'react';
import { Dimensions, TextInput, View } from 'react-native';

const SearchInput = ({ textChange }: any) => {
  const handleChange = (event: any) => {
    textChange(event);
  };
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View>
      <TextInput
        style={{
          width: width * 0.8,
          height: height * 0.06,
          margin: 'auto',
          borderRadius: 20,
          padding: 16,
          borderColor: 'grey',
          fontSize: 16,
          borderWidth: 2,
        }}
        onChangeText={handleChange}
        placeholder={'Search emoji ... 🔍 '}
      />
    </View>
  );
};

export default SearchInput;
