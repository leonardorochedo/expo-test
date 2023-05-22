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

export function LoginScreen({ navigation }) {

    const { loginUser } = useContext(Context)

    const { register, setValue, handleSubmit } = useForm()

    const [email, setEmail] = useState()
    const [isValid, setIsValid] = useState(false)

    const [notify, setNotify] = useState({})
    const [notifyView, setNotifyView] = useState(false)

    // register fields
    useEffect(() => {
      register('email')
      register('password')
    }, [register])

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if(emailRegex.test(email)) {
        setIsValid(true)
      }
    }

    async function onSubmit(data) {
      setNotifyView(true)
      validateEmail(email)

      if(!isValid) {
        return setNotify({message: "Confira se o e-mail foi digitado corretamente", type: "danger"})
      }
      
      await loginUser(data).then((response) => setNotify(response))
    }

    return (
      <View style={styles.container}>
        {notifyView && <Notification message={notify?.message} type={notify?.type} />}
        <ImageLogo />
        <FormInput buttonTitle="Entrar" onPressHandle={handleSubmit(onSubmit)} >
          <InputArea title="E-mail" placeholder="Digite seu e-mail" onChangeTextHandle={text => {
                                                                                                  setValue('email', text)
                                                                                                  setEmail(text)
                                                                                                }} />
          <InputArea title="Senha" placeholder="Digite sua senha" onChangeTextHandle={text => setValue('password', text)} secureTextEntry={true} />
          <Text style={styles.clickText} onPress={() => {navigation.navigate('Register')}} >Não tem uma conta? <Text style={styles.labelText} >Clique aqui.</Text></Text>
        </FormInput>
        <Navbar />
      </View>
    );
}
