import { Text, View } from 'react-native';

import { Navbar } from '../components/Navbar';

import { styles } from '../utils/styles';

export function PostScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Post</Text>
            <Navbar />
        </View>
    )
}