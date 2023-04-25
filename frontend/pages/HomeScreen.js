import { Text, View } from 'react-native';

import { styles } from '../styleProps';

export function HomeScreen({ navigation }) {

    return (
      <View style={styles.container}>
        <Text style={styles.title} >Logado</Text>
      </View>
    );
}