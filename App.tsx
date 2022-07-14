import { StyleSheet, View } from 'react-native';
import LoginPage from './src/modules/auth/pages/Login';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
          <LoginPage />
      </NavigationContainer>
    </PaperProvider>
  );
}

