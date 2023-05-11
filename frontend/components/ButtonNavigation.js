import { useEffect, useState, useRef } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from '../utils/styles';

export function ButtonNavigation({ buttonTitle, onPressHandle }) {

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
    <Pressable style={[styles.button, pressed && styles.buttonPressed]} onPress={onPressHandle} onPressIn={onPressInHandle} ref={buttonRef} >
        <Text style={[styles.buttonText, pressed && styles.buttonTextPressed]} >{buttonTitle.toUpperCase()}</Text>
    </Pressable>
  );
}