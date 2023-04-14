import { View, Pressable, Text, StyleSheet } from 'react-native';

export function FormInput({ children, buttonTitle }) {
  return (
    <View style={styles.formContainer} >
        {children}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText} >{buttonTitle.toUpperCase()}</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: .5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: '2rem',
    width: '100%',
    backgroundColor: 'transparent',
    border: '2px solid #00ff00',
    borderRadius: '5px',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Open Sans',
    color: '#00ff00',
  }
});
