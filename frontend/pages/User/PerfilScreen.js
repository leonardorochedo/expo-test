import { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Notification } from '../../components/Notification';
import { Navbar } from '../../components/Navbar';
import { ImageLogo } from '../../components/ImageLogo';

import { Context } from '../../context/AppContext';

import { styles } from '../../utils/styles';

export function PerfilScreen() {

    const [user, setUser] = useState({})

    const { getMyUser, deleteUser, logoutUser } = useContext(Context)

    const navigation = useNavigation()
    const [notify, setNotify] = useState({})
    const [notifyView, setNotifyView] = useState(false)

    // get user
    useEffect(() => {
        getMyUser().then((response) => {
            setUser(response.user)
        })
    }, [])

    async function onDeleteUser() {
        setNotifyView(true)
        await deleteUser(user.id).then((response) => setNotify(response))
    }

    async function onLogoutUser() {
        setNotifyView(true)
        await logoutUser().then((response) => setNotify(response))
    }

    return (
        <View style={styles.container}>
            {notifyView && <Notification message={notify?.message} type={notify?.type} />}
            <ImageLogo />
            <Text style={styles.subTitle}>Perfil de: {user.name}</Text>
            <View>
                <Text style={""} onPress={() => navigation.navigate('EditUser')} >EDITAR PERFIL</Text>
                <Text style={""} onPress={() => navigation.navigate('PostUser')} >VER PUBLICAÇÕES</Text>
                <Text style={""} onPress={() => onDeleteUser()} >DELETAR CONTA</Text>
                <Text style={""} onPress={() => onLogoutUser()} >SAIR</Text>
            </View>
            <Navbar />
        </View>
    )
}