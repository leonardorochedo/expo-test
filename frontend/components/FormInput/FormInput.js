import { View, Button, StyleSheet } from 'react-native';

export function FormInput({ children, buttonTitle }) {
  return (
    <View style={styles.formContainer} >
        {children}
        <Button title={buttonTitle} style={styles.buttonStyle} />
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
  buttonStyle: {
    fontFamily: 'Open Sans',
    width: 100,
    borderRadius: '10px',
  }
});
