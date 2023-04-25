import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Text, View, StyleSheet } from 'react-native';

import { InputArea } from '../components/InputArea/InputArea';
import { FormInput } from '../components/FormInput/FormInput';

import { Context } from '../context/UserContext';

import { styles } from '../styleProps';

export function LoginScreen({ navigation }) {

    const { login } = useContext(Context)

    const { register, setValue, handleSubmit } = useForm()

    // register fields
    useEffect(() => {
      register('email')
      register('password')
    }, [register])

    async function onSubmit(data) {
      await login(data)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title} >MyApp!</Text>
        <FormInput buttonTitle="Entrar" onPressHandle={handleSubmit(onSubmit)} >
          <InputArea title="E-mail" placeholder="Digite seu e-mail" onChangeTextHandle={text => setValue('email', text)} />
          <InputArea title="Senha" placeholder="Digite sua senha" onChangeTextHandle={text => setValue('password', text)} secureTextEntry={true} />
          <Text style={stylesHome.registerText} onPress={() => {navigation.navigate('Register')}} >Não tem uma conta? <Text style={stylesHome.labelText} >Clique aqui.</Text></Text>
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