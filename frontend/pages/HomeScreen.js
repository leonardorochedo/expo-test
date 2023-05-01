import { useContext } from 'react';
import { Text, View } from 'react-native';

import { styles } from '../utils/styles';

import { Navbar } from '../components/Navbar';

import { Context } from '../context/UserContext';

export function HomeScreen() {

    const { authenticated } = useContext(Context)

    return (
      <View style={styles.container}>
        {authenticated ? (
            <Text style={styles.title} >Logado</Text>
        )
        : (
            <Text style={styles.title} >Não logado</Text>
        )}
        <Navbar />
      </View>
    );
}