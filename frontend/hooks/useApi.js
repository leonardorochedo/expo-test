import { useState, useEffect } from 'react';

// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Message
// import { Toast } from 'toastify-react-native';

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

        // se tiver um token ja manda pro backend atraves da API
        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticate(true)
        }
    }, [])

    async function authUser(data) {
        setAuthenticate(true)
        AsyncStorage.setItem('token', JSON.stringify(data.token)) // setando token
        navigation.navigate("Home")
    }

    async function register(user) {
        let msgText = 'Cadastro realizado com sucesso!'

        try {
            const data = await api.post('/users/register', user).then((response) => {
                return response.data
            })

            await authUser(data)
            
            // Toast.success(msgText)
        } catch (err) {
            msgText = err.response.data.message
            // Toast.error(msgText)
        }
    }

    async function login(user) {
        let msgText = 'Login realizado com sucesso!'

        try {
            const data = await api.post('/users/login', user).then((response) => {
                return response.data
            })

            await authUser(data)
            
            console.log(msgText)
        } catch (err) {
            msgText = err.response.data.message
            console.log(msgText)
        }
    }

    return { authenticated, register, login }

}