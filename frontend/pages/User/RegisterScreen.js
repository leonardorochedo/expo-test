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

export function RegisterScreen({ navigation }) {

    const { registerUser } = useContext(Context)

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

    async function onSubmit(data) {
      setNotifyView(true)

      await registerUser(data).then((response) => setNotify(response))
    }

    return (
      <View style={styles.container}>
        {notifyView && <Notification message={notify?.message} type={notify?.type} />}
        <ImageLogo />
        <FormInput buttonTitle="Registrar" onPressHandle={handleSubmit(onSubmit)} >
          <InputArea title="Nome" placeholder="Digite seu nome" onChangeTextHandle={text => setValue('name', text)} />
          <InputArea title="Celular" placeholder="Digite seu celular" onChangeTextHandle={text => setValue('phone', text)} />
          <InputArea title="E-mail" placeholder="Digite seu e-mail" onChangeTextHandle={text => setValue('email', text)} />
          <InputArea title="Senha" placeholder="Digite sua senha" onChangeTextHandle={text => setValue('password', text)} secureTextEntry={true} />
          <InputArea title="Confirme sua senha" placeholder="Digite sua senha novamente" onChangeTextHandle={text => setValue('confirmpassword', text)} secureTextEntry={true} />
          <Text style={styles.clickText} onPress={() => {navigation.navigate('Login')}} >Já tem uma conta? <Text style={styles.labelText} >Clique aqui.</Text></Text>
        </FormInput>
        <Navbar />
      </View>
    );
}
