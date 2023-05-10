import { useState, useEffect } from 'react';

// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Api Axios
import api from '../utils/api';

export function useApi() {
    
    const [authenticated, setAuthenticate] = useState(false)
    const [token, setToken] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        async function getToken () {
            await AsyncStorage.getItem('token')
            .then((data) => setToken(data))
        }

        getToken()

        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticate(true)
        }
    }, [authenticated])
    
    async function authUser(data) {
        setAuthenticate(true)
        AsyncStorage.setItem('token', JSON.stringify(data.token))
        setTimeout(() => {
            navigation.navigate("Home")
        }, 2000)
    }

    // Users
    async function registerUser(user) {
        let msgText = 'Cadastro realizado com sucesso!'

        try {
            const data = await api.post('/users/register', user).then((response) => {
                return response.data
            })

            authUser(data)
            
            return {message: msgText, type: 'success'}
        } catch (err) {
            msgText = err.response.data.message
            return {message: msgText, type: 'danger'}
        }
    }

    async function loginUser(user) {
        let msgText = 'Login realizado com sucesso!'

        try {
            const data = await api.post('/users/login', user).then((response) => {
                return response.data
            })

            authUser(data)
            
            return {message: msgText, type: 'success'}
        } catch (err) {
            msgText = err.response.data.message
            return {message: msgText, type: 'danger'}
        }
    }

    async function editUser(user, id) {
        let msgText = 'Usuário editado com sucesso!'

        try {
            const data = await api.patch(`/users/edit/${id}`, user).then((response) => {
                return response.data
            })
            
            return {message: msgText, type: 'success'}
        } catch (err) {
            msgText = err.response.data.message
            return {message: msgText, type: 'danger'}
        }
    }

    async function deleteUser(id) {
        let msgText = 'Usuário deletado com sucesso!'

        try {
            const data = await api.delete(`/users/delete/${id}`).then((response) => {
                return response.data
            })

            setAuthenticate(false)
            AsyncStorage.removeItem('token')
            api.defaults.headers.Authorization = undefined

            setTimeout(() => {
                navigation.navigate("Home")
                window.location.reload(true)
            }, 2000)
            
            return {message: msgText, type: 'success'}
        } catch (err) {
            msgText = err.response.data.message
            return {message: msgText, type: 'danger'}
        }
    }

    async function logoutUser() {
        setAuthenticate(false)
        AsyncStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined

        
        setTimeout(() => {
            navigation.navigate("Home")
            window.location.reload(true)
        }, 2000)

        return {message: 'Usuário deslogado com sucesso', type: 'success'}
    }

    async function getMyUser() {
        try {
            const data = await api.get('/users/myuser').then((response) => {
                return response.data
            })

            return data
        } catch (err) {
            return {message: err.response.data.message, type: 'danger'}
        }
    }

    // Posts
    async function getPosts(user) {
        try {
            const data = await api.get('/posts', user).then((response) => {
                return response.data
            })
            
            return { data }
        } catch (err) {
            msgText = err.response.data.message
            return {message: msgText, type: 'danger'}
        }
    }

    async function createPost(post) {
        let msgText = "Publicação criada com sucesso"

        try {
            const data = await api.post('/posts/create', post).then((response) => {
                return response.data
            })
            
            setTimeout(() => {
                navigation.navigate("Home")
                window.location.reload(true)
            }, 2000)

            return {message: msgText, type: 'success'}
        } catch (err) {
            msgText = err.response.data.message
            return {message: msgText, type: 'danger'}
        }
    }

    return { authenticated, registerUser, loginUser, editUser, deleteUser, logoutUser, getMyUser, getPosts, createPost }

}