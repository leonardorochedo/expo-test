import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native';

import { Notification } from '../components/Notification';
import { InputArea } from '../components/InputArea';
import { FormInput } from '../components/FormInput';
import { Navbar } from '../components/Navbar';

import { Context } from '../context/UserContext';

import { styles } from '../utils/styles';

export function LoginScreen({ navigation }) {

    const { loginUser } = useContext(Context)

    const { register, setValue, handleSubmit } = useForm()

    const [notify, setNotify] = useState({})

    // register fields
    useEffect(() => {
      register('email')
      register('password')
    }, [register])

    async function onSubmit(data) {
      await loginUser(data).then((response) => setNotify(response))
    }

    return (
      <View style={styles.container}>
        <Notification message={notify?.message} type={notify?.type} />
        <Text style={styles.title} >MyApp!</Text>
        <FormInput buttonTitle="Entrar" onPressHandle={handleSubmit(onSubmit)} >
          <InputArea title="E-mail" placeholder="Digite seu e-mail" onChangeTextHandle={text => setValue('email', text)} />
          <InputArea title="Senha" placeholder="Digite sua senha" onChangeTextHandle={text => setValue('password', text)} secureTextEntry={true} />
          <Text style={styles.clickText} onPress={() => {navigation.navigate('Register')}} >Não tem uma conta? <Text style={styles.labelText} >Clique aqui.</Text></Text>
        </FormInput>
        <Navbar />
      </View>
    );
}
