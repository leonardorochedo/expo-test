import { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ImageLogo } from '../../components/ImageLogo';
import { Notification } from '../../components/Notification';
import { ButtonNavigation } from '../../components/ButtonNavigation';
import { Navbar } from '../../components/Navbar';

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
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                <ButtonNavigation buttonTitle="EDITAR PERFIL" onPressHandle={() => navigation.navigate('EditUser')} />
                <ButtonNavigation buttonTitle="VER PUBLICAÇÕES" onPressHandle={() => navigation.navigate('PostUser')} />
                <ButtonNavigation buttonTitle="DELETAR CONTA" onPressHandle={() => onDeleteUser()} />
                <ButtonNavigation buttonTitle="SAIR" onPressHandle={() => onLogoutUser()} />
            </View>
            <Navbar />
        </View>
    )
}