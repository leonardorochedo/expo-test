import { useState } from 'react';
import { View, Pressable, Text } from 'react-native';

import { styles } from '../../styleProps';

export function FormInput({ children, buttonTitle }) {

  const [isPressed, setIsPressed] = useState(false)

  return (
    <View style={styles.formContainer} >
        {children}
        <Pressable style={styles.button} >
          <Text style={styles.buttonText} >{buttonTitle.toUpperCase()}</Text>
        </Pressable>
    </View>
  );
}
