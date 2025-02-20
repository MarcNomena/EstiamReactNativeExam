import {
    TouchableWithoutFeedback,
    TouchableOpacity, TextInput, View, Keyboard,
    KeyboardAvoidingView, Image, StyleSheet, Platform,
  } from 'react-native';
  import { Text, Card, Button, Icon } from '@rneui/themed';

interface Product {
  name: string;
  image: string;
  description: string;
}

export const CustomCards = ({ name, image, description }: Product) => {
  return (
    <View>
     <Card.Title>{name}</Card.Title>
        <Card.Divider/>
        <View style={{position:"relative",alignItems:"center"}}>
          <Image
              style={{width:"100%",height:100}}
              resizeMode="contain"
              source={{ uri: image }}
            />
          <Text >{description}</Text>
         </View>
    </View>
  );
}