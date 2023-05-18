import { useState, useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../../utils/styles';
import { truncate } from '../../utils/truncate';

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
        getUserPosts(user.id).then((res) => {
          setPosts(res.data.posts)
        })
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
          {posts == 'undefined' ? (
            <Text style={styles.text}>Nenhuma publicação encontrada</Text>
          ) : (
            posts.map((post, index) => (
              <View key={index} style={styles.postContainer}>
                <Text style={styles.postTitle}>{truncate(post.title, 15)}</Text>
                <Text style={styles.postText}>{truncate(post.description, 50)}</Text>
                <View style={styles.containerDetails}>
                  <Text style={styles.detailsText} onPress={() => navigation.navigate("PostScreen", {postId: post.id, userId: post.UserId})}>ver detalhes</Text>
                  <Text style={styles.postAuthor}>-{truncate(post.User.name, 15)}</Text>
                </View>
                <View style={styles.containerDetails}>
                  <Text style={styles.textEditPost} onPress={() => navigation.navigate("EditPost", {postId: post.id, userId: user.id})}>EDITAR</Text>
                  <Text style={styles.textDeletePost} onPress={() => onDeletePost(post.id)}>DELETAR</Text>
                </View>
              </View>
              ))
          )}
        <Navbar />
      </View>
    );
}