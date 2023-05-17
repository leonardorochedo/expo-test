import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//  Pages
import { HomeScreen } from './pages/HomeScreen';

import { LoginScreen } from "./pages/User/LoginScreen";
import { RegisterScreen } from './pages/User/RegisterScreen';
import { PerfilScreen } from './pages/User/PerfilScreen';
import { EditUserScreen } from './pages/User/EditUserScreen';
import { PostUserScreen } from './pages/User/PostUserScreen';

import { PostScreen } from './pages/Post/PostScreen';
import { CreatePostScreen } from './pages/Post/CreatePostScreen';
import { EditPostScreen } from './pages/Post/EditPostScreen';

// Context
import { AppProvider } from "./context/AppContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PostScreen" component={PostScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} />
          <Stack.Screen name="EditUser" component={EditUserScreen} />
          <Stack.Screen name="PostUser" component={PostUserScreen} />
          <Stack.Screen name="CreatePost" component={CreatePostScreen} />
          <Stack.Screen name="EditPost" component={EditPostScreen} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}