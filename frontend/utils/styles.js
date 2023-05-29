import { StyleSheet } from 'react-native';

var font_family = 'Verdana'
var title_color = '#16dca7'
var text_color = '#fff'
var bg_color = '#a424f5'

export const styles = StyleSheet.create({
    // Geral 
    container: {
      // flex: 1,
      backgroundColor: bg_color,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '2rem',
      paddingBottom: '3rem',
      maxWidth: '100vw',
      minHeight: '100vh'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: title_color,
      marginBottom: '2rem'
    },
    subTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: title_color,
      marginBottom: '2rem'
    },
    text: {
      fontSize: '1rem',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: text_color,
      marginBottom: '2rem'
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
    // Button
    button: {
      width: '100%',
      height: '3rem',
      marginBottom: '2rem',
      backgroundColor: 'transparent',
      border: `2px solid ${title_color}`,
      borderRadius: '5px',
      textAlign: 'center',
      justifyContent: 'center',
    },
    buttonPressed: {
      backgroundColor: title_color,
      border: `2px solid ${title_color}`,
      transitionDuration: '100ms',
    },
    buttonText: {
      fontFamily: font_family,
      color: title_color,
    },
    buttonTextPressed: {
      color: text_color,
    },
    // Form
    formContainer: {
      flex: 1,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonForm: {
      height: '2rem',
      width: '30%',
      marginLeft: 'auto',
      backgroundColor: 'transparent',
      border: `2px solid ${title_color}`,
      borderRadius: '5px',
      textAlign: 'center',
      justifyContent: 'center',
    },
    buttonFormPressed: {
      backgroundColor: title_color,
      transitionDuration: '100ms',
    },
    buttonFormText: {
      fontFamily: font_family,
      color: title_color,
    },
    buttonFormTextPressed: {
      transitionDuration: '100ms',
      color: text_color,
    },
    labelText: {
      color: '#00ced1',
    },
    clickText: {
      color: '#fff',
      marginBottom: '2rem',
      fontFamily: 'Verdana',
    },
    // Navbar
    navbar: {
      width: '100%',
      height: '5vh',
      backgroundColor: bg_color,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: '2px',
      borderTopColor: 'white',
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
    },
    optionsNavbar: {
      fontFamily: font_family,
      color: text_color,
    },
    optionsNavbarPressed: {
      color: title_color,
      transitionDuration: '100ms',
    },
    // Post
    postContainer: {
      backgroundColor: '#0b3a9c',
      borderRadius: '15px',
      width: '80%',
      padding: '2rem',
      marginBottom: '1rem',
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    postTitle: {
      fontFamily: font_family,
      color: text_color,
      fontSize: '1.5rem',
      marginBottom: '2rem',
    },
    containerDetails: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      marginTop: '1.5rem'
    },
    postText: {
      fontFamily: font_family,
      color: text_color,
      fontSize: '1rem',
    },
    detailsText: {
      fontFamily: font_family,
      color: title_color,
      fontSize: '.75rem',
    },
    postAuthor: {
      fontFamily: font_family,
      color: text_color,
      fontSize: '.75rem',
    },
    // PostUser
    textEditPost: {
      fontFamily: font_family,
      color: 'yellow'
    },
    textDeletePost: {
      fontFamily: font_family,
      color: 'red'
    }
});