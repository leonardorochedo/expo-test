import { Text, View } from 'react-native';
import { InputArea } from './components/InputArea/InputArea';
import { FormInput } from './components/FormInput/FormInput';

import { styles } from './styleProps';

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