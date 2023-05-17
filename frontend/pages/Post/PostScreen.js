import { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';

import { Navbar } from '../../components/Navbar';
import { ImageLogo } from '../../components/ImageLogo';

import { Context } from '../../context/AppContext';

import { styles } from '../../utils/styles';

export function PostScreen({ route }) {
    
    const { postId, userId } = route.params
    const [post, setPost] = useState({})
    const [userName, setUserName] = useState()

    const { getPostById } = useContext(Context)

    useEffect(() => {
        getPostById(postId, userId).then((response) => {
          setPost(response.data.post)
          setUserName(response.data.post.User.name)
        })
      }, [])

    return (
        <View style={styles.container}>
            <ImageLogo />
            <Text style={styles.subTitle}>{post.title}</Text>
            <Text style={styles.text}>{post.description}</Text>
            <Text style={styles.text}>Publicado por: {userName}</Text>
            <Navbar />
        </View>
    )
}