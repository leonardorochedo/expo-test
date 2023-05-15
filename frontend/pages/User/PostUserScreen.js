import { useState, useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../../utils/styles';

import { Notification } from '../../components/Notification';
import { ImageLogo } from '../../components/ImageLogo';
import { Navbar } from '../../components/Navbar';

import { Context } from '../../context/AppContext';

export function PostUserScreen() {

    const navigation = useNavigation()

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const { getMyUser, getUserPosts, deletePost } = useContext(Context)

    const [notify, setNotify] = useState({})
    const [notifyView, setNotifyView] = useState(false)

    // get user & posts
    useEffect(() => {
        getMyUser().then((res) => setUser(res.user))
    }, [])

    useEffect(() => {
        getUserPosts(user.id).then((res) => setPosts(res.data.posts))
    }, [user])

    async function onDeletePost(id) {
      setNotifyView(true)
      await deletePost(id).then((response) => setNotify(response))
    }

    return (
      <View style={styles.container}>
        {notifyView && <Notification message={notify?.message} type={notify?.type} />}
        <ImageLogo />
        <Text style={styles.subTitle}>Publicações de {user.name}</Text>
          {posts.map((post, index) => (
            <View key={index} style={styles.postContainer}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postText}>{post.description}</Text>
              <Text style={styles.postAuthor}>-{post.User.name}</Text>
              <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: '1.5rem'}}>
                <Text style={styles.textEditPost} onPress={() => navigation.navigate("EditPost", {postId: post.id})}>EDITAR</Text>
                <Text style={styles.textDeletePost} onPress={() => onDeletePost(post.id)}>DELETAR</Text>
              </View>
            </View>
          ))}
        <Navbar />
      </View>
    );
}