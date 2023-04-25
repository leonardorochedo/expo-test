import { View, Pressable, Text } from 'react-native';

import { styles } from '../../styleProps';

export function FormInput({ children, buttonTitle, onPressHandle }) {

  return (
    <View style={styles.formContainer} >
        {children}
        <Pressable style={styles.button} onPress={onPressHandle} >
          <Text style={styles.buttonText} >{buttonTitle.toUpperCase()}</Text>
        </Pressable>
    </View>
  );
}
