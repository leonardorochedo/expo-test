import { Text, View } from 'react-native';

import { styles } from '../styleProps';

export function HomeScreen() {

    return (
      <View style={styles.container}>
        <Text style={styles.title} >Logado</Text>
      </View>
    );
}