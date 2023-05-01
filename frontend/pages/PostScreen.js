import { Text, View } from 'react-native';

import { Navbar } from '../components/Navbar';
import { ImageLogo } from '../components/ImageLogo';

import { styles } from '../utils/styles';

export function PostScreen() {
    return (
        <View style={styles.container}>
            <ImageLogo />
            <Text style={styles.title}>Criar Post</Text>
            <Navbar />
        </View>
    )
}