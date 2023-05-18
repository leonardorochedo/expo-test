import { useState, useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../utils/styles';
import { truncate } from '../utils/truncate';

import { ImageLogo } from '../components/ImageLogo';
import { Navbar } from '../components/Navbar';

import { Context } from '../context/AppContext';

export function HomeScreen() {

    const navigation = useNavigation()
    const [posts, setPosts] = useState([])
    const { getPosts } = useContext(Context)

    useEffect(() => {
      getPosts().then((res) => setPosts(res.data.posts))
    }, [])

    return (
      <View style={styles.container}>
        <ImageLogo />
          {posts.map((post, index) => (
            <View key={index} style={styles.postContainer}>
              <Text style={styles.postTitle}>{truncate(post.title, 15)}</Text>
              <Text style={styles.postText}>{truncate(post.description, 50)}</Text>
              <View style={styles.containerDetails}>
                <Text style={styles.detailsText} onPress={() => navigation.navigate("PostScreen", {postId: post.id, userId: post.UserId})}>ver detalhes</Text>
                <Text style={styles.postAuthor}>-{truncate(post.User.name, 15)}</Text>
              </View>
            </View>
          ))}
        <Navbar />
      </View>
    );
}