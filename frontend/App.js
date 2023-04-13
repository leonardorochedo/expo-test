import { StyleSheet, Text, View } from 'react-native';
import { InputArea } from './components/InputArea/InputArea'
import { FormInput } from './components/FormInput/FormInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >MyApp!</Text>
      <FormInput buttonTitle="Entrar" >
        <InputArea title="E-mail" placeholder="Digite seu e-mail" />
        <InputArea title="Senha" placeholder="Digite sua senha" />
      </FormInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    color: 'white',
  }
});
