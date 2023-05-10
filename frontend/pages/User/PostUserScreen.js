import { useState, useContext, useEffect } from 'react';
import { Text, View } from 'react-native';

import { styles } from '../../utils/styles';

import { ImageLogo } from '../../components/ImageLogo';
import { Navbar } from '../../components/Navbar';

import { Context } from '../../context/AppContext';

export function PostUserScreen() {

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const { getMyUser, getUserPosts } = useContext(Context)

    // get user & posts
    useEffect(() => {
        getMyUser().then((res) => setUser(res.user))
    }, [])

    useEffect(() => {
        getUserPosts(user.id).then((res) => setPosts(res.data.posts))
    }, [user])

    return (
      <View style={styles.container}>
        <ImageLogo />
        <Text style={styles.subTitle}>Publicações de {user.name}</Text>
          {posts.map((post, index) => (
            <View key={index} style={styles.postContainer}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postText}>{post.description}</Text>
              <Text style={styles.postAuthor}>-{post.User.name}</Text>
            </View>
          ))}
        <Navbar />
      </View>
    );
}