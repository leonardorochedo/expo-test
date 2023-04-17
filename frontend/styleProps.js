import { StyleSheet } from 'react-native';

var font_family = 'Verdana'
var font_color = '#fff'

export const styles = StyleSheet.create({
    // Geral 
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: font_color,
    },
    // Input
    label: {
      fontSize: '1rem',
      marginBottom: '1rem',
      marginRight: 'auto',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: font_color,
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
      fontFamily: font_family,
    },
    // Form
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
      fontFamily: font_family,
      color: '#00ff00',
    },
    buttonPressed: {
      backgroundColor: '#00ff00',
      color: font_color
    }
});