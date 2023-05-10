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

    // get user
    useEffect(() => {
        getMyUser().then((response) => {
            setUser(response.user)
        })
    }, [])

    // register fields
    useEffect(() => {
      register('name')
      register('phone')
      register('email')
      register('password')
      register('confirmpassword')
    }, [register])

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
                <InputArea title={`Nome: ${user?.name}`} placeholder="Novo nome" onChangeTextHandle={text => setValue('name', text)} />
                <InputArea title={`Celular: ${user?.phone}`} placeholder="Novo celular" onChangeTextHandle={text => setValue('phone', text)} />
                <InputArea title={`E-mail: ${user?.email}`} placeholder="Novo e-mail" onChangeTextHandle={text => setValue('email', text)} />
                <InputArea title="Senha" placeholder="Digite sua senha" onChangeTextHandle={text => setValue('password', text)} secureTextEntry={true} />
                <InputArea title="Confirme sua senha" placeholder="Digite sua senha novamente" onChangeTextHandle={text => setValue('confirmpassword', text)} secureTextEntry={true} />
            </FormInput>
            <Navbar />
        </View>
    )
}