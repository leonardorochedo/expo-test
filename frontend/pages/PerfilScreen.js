import { Text, View } from 'react-native';

import { Navbar } from '../components/Navbar';

import { styles } from '../utils/styles';

export function PerfilScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Navbar />
        </View>
    )
}