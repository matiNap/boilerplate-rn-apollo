import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          alignSelf: 'center',
        }}
      >
        RN and Graphql boilerplate
      </Text>

      <Button
        title="To screen 2"
        containerStyle={{
          width: '70%',
          alignSelf: 'center',
          marginTop: 50,
        }}
        onPress={() => navigate('screen2')}
      />
    </View>
  );
};

export default Screen1;
