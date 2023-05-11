import { useEffect, useState, useRef } from 'react';
import { View, Pressable, Text } from 'react-native';

import { styles } from '../utils/styles';

export function FormInput({ children, buttonTitle, onPressHandle }) {

  const [pressed, setPressed] = useState(false)
  const buttonRef = useRef(null);

  function onPressInHandle() {
    setPressed(!pressed)
  }

  // Reset button style
  useEffect(() => {
    const button = buttonRef.current;

    button.addEventListener('focus', () => {
      setPressed(false)
    });
  }, [])

  return (
    <View style={styles.formContainer} >
        {children}
        <Pressable style={[styles.buttonForm, pressed && styles.buttonPressed]} onPress={onPressHandle} onPressIn={onPressInHandle} ref={buttonRef} >
          <Text style={[styles.buttonFormText, pressed && styles.buttonFormTextPressed]} >{buttonTitle.toUpperCase()}</Text>
        </Pressable>
    </View>
  );
}
