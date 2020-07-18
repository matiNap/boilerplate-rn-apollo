import React from 'react';
import {
  InMemoryCache,
  ApolloProvider,
  ApolloClient,
} from '@apollo/client';
import { useFonts } from '@expo-google-fonts/inter';
import { Rubik_500Medium } from '@expo-google-fonts/dev';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import palette, {
  createElementsTheme,
  createNavigationTheme,
} from '_palette';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import AppContainer from './screens/AppContainer';

console.disableYellowBox = true;

const cache = new InMemoryCache({});

const client = new ApolloClient({
  uri: 'PASTE SERVER URI',
  cache,
});

export default function App() {
  const [fontsLoaded] = useFonts({ Rubik_500Medium });
  const scheme = useColorScheme();
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={palette.dark.primary} size={50} />
      </View>
    );
  } else {
    const currentPalette =
      scheme === 'dark' ? palette.dark : palette.light;
    const isDarkTheme = scheme === 'dark' ? true : false;
    const navigationTheme = createNavigationTheme(
      currentPalette,
      isDarkTheme,
    );
    const elementsTheme = createElementsTheme(currentPalette);
    const statusBarStyle = isDarkTheme ? 'light' : 'dark';

    return (
      <NavigationContainer theme={navigationTheme}>
        <ThemeProvider theme={elementsTheme}>
          <ApolloProvider client={client}>
            <AppContainer />
            <StatusBar style={statusBarStyle} />
          </ApolloProvider>
        </ThemeProvider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
