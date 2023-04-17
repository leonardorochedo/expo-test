import { Text, TextInput } from 'react-native';

import { styles } from '../../styleProps';

export function InputArea({ title, placeholder }) {
  return (
    <>
      <Text style={styles.label}>
        {title}
      </Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </>
  );
}