import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native';

import api from '../utils/api';

import { Notification } from '../components/Notification';
import { InputArea } from '../components/InputArea';
import { FormInput } from '../components/FormInput';
import { Navbar } from '../components/Navbar';
import { ImageLogo } from '../components/ImageLogo';

import { Context } from '../context/UserContext';

import { styles } from '../utils/styles';

export function PerfilScreen() {

    const [user, setUser] = useState({})

    // const { editUser } = useContext(Context)

    const { register, setValue, handleSubmit } = useForm()

    const [notify, setNotify] = useState({})

    // get user
    api.get(`/users/withtoken`)
    .then((res) => {
        setUser(res)
    })

    // register fields
    useEffect(() => {
      register('name')
      register('phone')
      register('email')
      register('password')
      register('confirmpassword')
    }, [register])

    async function onSubmit(data) {
      // await editUser(data).then((response) => setNotify(response))
    }

    return (
        <View style={styles.container}>
            <Notification message={notify?.message} type={notify?.type} />
            <ImageLogo />
            <Text style={styles.title}>Perfil</Text>
            <FormInput buttonTitle="Atualizar" onPressHandle={handleSubmit(onSubmit)} >
                <InputArea value={user?.name} title="Nome" placeholder="Digite seu nome" onChangeTextHandle={text => setValue('name', text)} />
                <InputArea value={user?.phone} title="Celular" placeholder="Digite seu celular" onChangeTextHandle={text => setValue('phone', text)} />
                <InputArea value={user?.email} title="E-mail" placeholder="Digite seu e-mail" onChangeTextHandle={text => setValue('email', text)} />
                <InputArea title="Senha" placeholder="Digite sua senha" onChangeTextHandle={text => setValue('password', text)} secureTextEntry={true} />
                <InputArea title="Confirme sua senha" placeholder="Digite sua senha novamente" onChangeTextHandle={text => setValue('confirmpassword', text)} secureTextEntry={true} />
            </FormInput>
            <Navbar />
        </View>
    )
}