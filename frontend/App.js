import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//  Pages
import { LoginScreen } from "./pages/LoginScreen";
import { RegisterScreen } from './pages/RegisterScreen';
import { HomeScreen } from './pages/HomeScreen';
import { PostScreen } from './pages/PostScreen';
import { PerfilScreen } from './pages/PerfilScreen';

// Context
import { UserProvider } from "./context/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Post" component={PostScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}