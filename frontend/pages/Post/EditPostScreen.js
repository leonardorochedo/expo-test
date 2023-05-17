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

export function EditPostScreen({ route }) {

    const { postId, userId } = route.params
    const [post, setPost] = useState({})

    const { getPostById, editPost } = useContext(Context)

    const { register, setValue, handleSubmit } = useForm()

    const [notify, setNotify] = useState({})
    const [notifyView, setNotifyView] = useState(false)

    // register fields
    useEffect(() => {
      register('title')
      register('description')
    }, [register])

    useEffect(() => {
      getPostById(postId, userId).then((response) => {
        setPost(response.data.post)
      })
    }, [])

    async function onSubmit(data) {
      setNotifyView(true)
      await editPost(data, postId).then((response) => setNotify(response))
    }

    return (
        <View style={styles.container}>
            {notifyView && <Notification message={notify?.message} type={notify?.type} />}
            <ImageLogo />
            <Text style={styles.title}>Editando Publicação</Text>
            <FormInput buttonTitle="Editar" onPressHandle={handleSubmit(onSubmit)} >
                <InputArea title={`Título: ${post.title}`} placeholder="Digite o título" onChangeTextHandle={text => setValue('title', text)} />
                <InputArea title={`Descrição: ${post.description}`} placeholder="Digite uma descrição da publicação..." onChangeTextHandle={text => setValue('description', text)} styleInput={{description: {height: '10rem', justifyContent: 'flex-start'}}} />
            </FormInput>
            <Navbar />
        </View>
    )
}