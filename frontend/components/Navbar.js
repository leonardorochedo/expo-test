import { useEffect, useState, useRef, useContext } from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from '../utils/styles';

import { Context } from '../context/AppContext';

export function Navbar() {

    const [pressed, setPressed] = useState(false)
    const viewRef = useRef(null);

    const { authenticated } = useContext(Context)
    const navigation = useNavigation()

    function onPressInHandle() {
        setPressed(!pressed)
    }

    // Reset button style
    useEffect(() => {
        const view = viewRef.current;

        view.addEventListener('focus', () => {
            setPressed(false)
        });
    }, [])

    return (
        <View style={styles.navbar} ref={viewRef} >
            <Text style={[styles.optionsNavbar, pressed && styles.optionsNavbarPressed]} onPress={() => navigation.navigate("Home")} onPressIn={onPressInHandle} >Início</Text>
            {authenticated ? (
                <>
                    <Text style={[styles.optionsNavbar, pressed && styles.optionsNavbarPressed]} onPress={() => navigation.navigate("CreatePost")} onPressIn={onPressInHandle} >Criar Post</Text>
                    <Text style={[styles.optionsNavbar, pressed && styles.optionsNavbarPressed]} onPress={() => navigation.navigate("Perfil")} onPressIn={onPressInHandle} >Perfil</Text>
                </>
            ) : (
                <>
                    <Text style={[styles.optionsNavbar, pressed && styles.optionsNavbarPressed]} onPress={() => navigation.navigate("Register")} onPressIn={onPressInHandle} >Criar Conta</Text>
                    <Text style={[styles.optionsNavbar, pressed && styles.optionsNavbarPressed]} onPress={() => navigation.navigate("Login")} onPressIn={onPressInHandle} >Entrar</Text>
                </>
            )}
        </View>
    );
}