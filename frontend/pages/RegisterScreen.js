import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Text, View, StyleSheet } from 'react-native';

import { Notification } from '../components/Notification/Notification';
import { InputArea } from '../components/InputArea/InputArea';
import { FormInput } from '../components/FormInput/FormInput';

import { Context } from '../context/UserContext';

import { styles } from '../utils/styles';

export function RegisterScreen({ navigation }) {

    const { registerUser } = useContext(Context)

    const { register, setValue, handleSubmit } = useForm()

    const [notify, setNotify] = useState({})

    // register fields
    useEffect(() => {
      register('name')
      register('phone')
      register('email')
      register('password')
      register('confirmpassword')
    }, [register])

    async function onSubmit(data) {
      await registerUser(data).then((response) => setNotify(response))
    }

    return (
      <View style={styles.container}>
        <Notification message={notify?.message} type={notify?.type} />
        <Text style={styles.title} >MyApp!</Text>
        <FormInput buttonTitle="Registrar" onPressHandle={handleSubmit(onSubmit)} >
          <InputArea title="Nome" placeholder="Digite seu nome" onChangeTextHandle={text => setValue('name', text)} />
          <InputArea title="Celular" placeholder="Digite seu celular" onChangeTextHandle={text => setValue('phone', text)} />
          <InputArea title="E-mail" placeholder="Digite seu e-mail" onChangeTextHandle={text => setValue('email', text)} />
          <InputArea title="Senha" placeholder="Digite sua senha" onChangeTextHandle={text => setValue('password', text)} secureTextEntry={true} />
          <InputArea title="Confirme sua senha" placeholder="Digite sua senha novamente" onChangeTextHandle={text => setValue('confirmpassword', text)} secureTextEntry={true} />
          <Text style={stylesHome.registerText} onPress={() => {navigation.navigate('Login')}} >Já tem uma conta? <Text style={stylesHome.labelText} >Clique aqui.</Text></Text>
        </FormInput>
      </View>
    );
}

const stylesHome = StyleSheet.create({
  registerText: {
    color: '#fff',
    marginBottom: '2rem',
    fontFamily: 'Verdana',
  },
  labelText: {
    color: '#00ced1'
  }
})