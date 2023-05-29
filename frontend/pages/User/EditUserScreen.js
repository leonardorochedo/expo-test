import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native';

import { Notification } from '../../components/Notification';
import { InputArea } from '../../components/InputArea';
import { FormInput } from '../../components/FormInput';
import { Navbar } from '../../components/Navbar';
import { ImageLogo } from '../../components/ImageLogo';

import { Context } from '../../context/AppContext';

import { styles } from '../../utils/styles';

export function EditUserScreen() {

    const [user, setUser] = useState({})

    const { getMyUser, editUser } = useContext(Context)

    const { register, setValue, handleSubmit } = useForm()

    const [notify, setNotify] = useState({})
    const [notifyView, setNotifyView] = useState(false)

    // register fields
    useEffect(() => {
      register('name')
      register('phone')
      register('email')
      register('password')
      register('confirmpassword')
    }, [register])

    // get user
    useEffect(() => {
        getMyUser().then((response) => {
            setUser(response.user)
            setValue('name', response.user.name)
            setValue('phone', response.user.phone)
            setValue('email', response.user.email)
        })
    }, [])

    async function onSubmit(data) {
        setNotifyView(true)

        await editUser(data, user.id).then((response) => setNotify(response))
    }

    return (
        <View style={styles.container}>
            {notifyView && <Notification message={notify?.message} type={notify?.type} />}
            <ImageLogo />
            <Text style={styles.subTitle}>Editando Perfil</Text>
            <FormInput buttonTitle="Atualizar" onPressHandle={handleSubmit(onSubmit)} >
                <InputArea value={user?.name} title="Nome" placeholder="Novo nome" onChangeTextHandle={text => {setUser({...user, name: text}); setValue('name', text)}} />
                <InputArea value={user?.phone} title="Celular" placeholder="Novo celular" onChangeTextHandle={text => {setUser({...user, phone: text}); setValue('phone', text)}} />
                <InputArea value={user?.email} title="E-mail" placeholder="Novo e-mail" onChangeTextHandle={text => {setUser({...user, email: text}); setValue('email', text)}} />
                <InputArea title="Senha" placeholder="Digite sua senha" onChangeTextHandle={text => setValue('password', text)} secureTextEntry={true} />
                <InputArea title="Confirme sua senha" placeholder="Digite sua senha novamente" onChangeTextHandle={text => setValue('confirmpassword', text)} secureTextEntry={true} />
            </FormInput>
            <Navbar />
        </View>
    )
}