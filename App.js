import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Texto, Img} from './styles';

export default function App() {
  return (
    <Container>
      <Img source={{ uri: 'https://images.emojiterra.com/twitter/v13.1/512px/1f97a.png' }} style={styles.logo} />
      <Texto>
        A imagem acima aparece por causa da tag view e image
      </Texto>

      <TouchableOpacity
        onPress={() => alert('enganei o bobo')}
        style={{ backgroundColor: 'papayawhip'}}>
        <Texto id='teste'>Aperte para ver cachorros gratis online atualizado 2022</Texto>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 200,
    marginBottom: 20,
  },

});