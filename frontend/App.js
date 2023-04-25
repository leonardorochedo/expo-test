import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//  Pages
import { LoginScreen } from "./pages/LoginScreen";
import { RegisterScreen } from './pages/RegisterScreen';
import { HomeScreen } from './pages/HomeScreen';

// Context
import { UserProvider } from "./context/UserContext";

// Notification
// import ToastManager from 'toastify-react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}