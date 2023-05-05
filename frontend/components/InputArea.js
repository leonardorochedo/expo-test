import { Text, TextInput } from 'react-native';

import { styles } from '../utils/styles';

export function InputArea({ title, placeholder, onChangeTextHandle, secureTextEntry, styleInput }) {
  return (
    <>
      <Text style={styles.label}>
        {title}
      </Text>
      <TextInput placeholder={placeholder} style={[styles.input, styleInput?.description]} onChangeText={onChangeTextHandle} secureTextEntry={secureTextEntry} />
    </>
  );
}