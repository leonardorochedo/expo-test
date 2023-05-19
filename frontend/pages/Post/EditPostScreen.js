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

    // get post
    useEffect(() => {
      getPostById(postId, userId).then((response) => {
        setPost(response.data.post)
        setValue('title', response.data.post.title)
        setValue('description', response.data.post.description)
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
                <InputArea value={post?.title} title="Título" placeholder="Digite o título" onChangeTextHandle={text => {setPost({...post, title: text}); setValue('title', text)}} />
                <InputArea value={post?.description} title="Descrição" placeholder="Digite uma descrição da publicação..." onChangeTextHandle={text => {setPost({...post, description: text}); setValue('description', text)}} styleInput={{description: {height: '10rem', justifyContent: 'flex-start'}}} multiline={true} />
            </FormInput>
            <Navbar />
        </View>
    )
}