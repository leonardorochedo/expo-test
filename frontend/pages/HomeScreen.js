import { useState, useContext, useEffect } from 'react';
import { Text, View } from 'react-native';

import { styles } from '../utils/styles';

import { ImageLogo } from '../components/ImageLogo';
import { Navbar } from '../components/Navbar';

import { Context } from '../context/AppContext';
import api from '../utils/api';

export function HomeScreen() {

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState()
    const { getPosts } = useContext(Context)

    useEffect(() => {
      getPosts().then((res) => setPosts(res.data.posts))
    }, [])
    
    function getUser(id) {
      // api.get(`/users/${id}`).then((res) => setUser(res.data))
    }

    return (
      <View style={styles.container}>
        <ImageLogo />
          {posts.map((post, index) => (
            <View key={index} style={styles.postContainer} onLayout={getUser(post.UserId)}>
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postText}>{post.description}</Text>
              <Text style={styles.postText}>{user?.name}</Text>
            </View>
          ))}
        <Navbar />
      </View>
    );
}