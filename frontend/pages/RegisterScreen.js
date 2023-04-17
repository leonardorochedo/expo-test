import { Text, View, StyleSheet } from 'react-native';
import { InputArea } from '../components/InputArea/InputArea';
import { FormInput } from '../components/FormInput/FormInput';

import { styles } from '../styleProps';

export function RegisterScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >MyApp!</Text>
        <FormInput buttonTitle="Registrar" >
          <InputArea title="Nome" placeholder="Digite seu nome" />
          <InputArea title="Celular" placeholder="Digite seu celular" />
          <InputArea title="E-mail" placeholder="Digite seu e-mail" />
          <InputArea title="Senha" placeholder="Digite sua senha" />
          <InputArea title="Confirme sua senha" placeholder="Digite sua senha novamente" />
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