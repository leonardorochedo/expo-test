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

// Context
import { AppProvider } from "./context/AppContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} />
          <Stack.Screen name="EditUser" component={EditUserScreen} />
          <Stack.Screen name="PostUser" component={PostUserScreen} />
          <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}