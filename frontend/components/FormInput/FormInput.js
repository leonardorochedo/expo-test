import { View, Button, StyleSheet } from 'react-native';

export function FormInput({ children, buttonTitle }) {
  return (
    <View style={styles.formContainer} >
        {children}
        <Button title={buttonTitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 2,
    width: '80%',
    height: 'fit-content',
    backgroundColor: 'brown',
    border: '1px solid black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
