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
    fontSize: '1rem',
    marginBottom: '1rem',
    marginRight: 'auto',
    fontFamily: 'Open Sans',
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: '2rem',
    padding: '4px',
    marginBottom: '2rem',
    backgroundColor: '#fff',
    border: '1px solid black',
    borderRadius: '5px',
    justifyContent: 'center',
    fontFamily: 'Open Sans',
  },
});
