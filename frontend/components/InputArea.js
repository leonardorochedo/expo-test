import { Text, TextInput } from 'react-native';

import { styles } from '../utils/styles';

export function InputArea({ value, title, placeholder, onChangeTextHandle, secureTextEntry, styleInput, multiline }) {
  return (
    <>
      <Text style={styles.label}>
        {title}
      </Text>
      <TextInput 
        value={value} 
        placeholder={placeholder} 
        style={[styles.input, styleInput?.description]} 
        onChangeText={onChangeTextHandle} 
        secureTextEntry={secureTextEntry}
        multiline={multiline}
      />
    </>
  );
}