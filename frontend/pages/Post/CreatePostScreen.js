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

export function CreatePostScreen() {

    const { createPost } = useContext(Context)

    const { register, setValue, handleSubmit } = useForm()

    const [notify, setNotify] = useState({})
    const [notifyView, setNotifyView] = useState(false)

    // register fields
    useEffect(() => {
      register('title')
      register('description')
    }, [register])

    async function onSubmit(data) {
      setNotifyView(true)
      await createPost(data).then((response) => setNotify(response))
    }

    return (
        <View style={styles.container}>
            {notifyView && <Notification message={notify?.message} type={notify?.type} />}
            <ImageLogo />
            <Text style={styles.title}>Criar Publicação</Text>
            <FormInput buttonTitle="Criar" onPressHandle={handleSubmit(onSubmit)} >
                <InputArea title="Título" placeholder="Digite o título" onChangeTextHandle={text => setValue('title', text)} />
                <InputArea title="Descrição" placeholder="Digite uma descrição da publicação..." onChangeTextHandle={text => setValue('description', text)} styleInput={{description: {height: '10rem', justifyContent: 'flex-start'}}} multiline={true} />
            </FormInput>
            <Navbar />
        </View>
    )
}