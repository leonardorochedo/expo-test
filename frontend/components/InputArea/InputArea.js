import { Text, TextInput, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  label: {
    textAlign: 'left',
    fontSize: '1rem',
  },
  input: {
    backgroundColor: '#fff',
    border: '1px solid black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
