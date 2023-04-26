import { StyleSheet } from 'react-native';

var font_family = 'Verdana'
var title_color = '#00ced1'
var text_color = '#fff'

export const styles = StyleSheet.create({
    // Geral 
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '5rem'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: title_color,
      //marginTop: '10%',
    },
    // Input
    label: {
      fontSize: '1rem',
      marginBottom: '1rem',
      marginRight: 'auto',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: text_color,
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
      flex: 1,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      height: '2rem',
      width: '30%',
      marginLeft: 'auto',
      backgroundColor: 'transparent',
      border: `2px solid ${title_color}`,
      borderRadius: '5px',
      textAlign: 'center',
      justifyContent: 'center',
    },
    buttonPressed: {
      backgroundColor: title_color,
      transitionDuration: '100ms',
    },
    buttonText: {
      fontFamily: font_family,
      color: title_color,
    },
    buttonTextPressed: {
      color: text_color,
    }
});