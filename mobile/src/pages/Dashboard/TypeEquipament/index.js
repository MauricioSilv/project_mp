import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, FormInput, SubmitButton, CancelSave } from './styles';
import Background from '~/components/Background';

export default function TypeEquipament() {
  const [typeEquipament, setTypeEquipment] = useState('');

  function handleSubmit() {}
  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Tipo de equipamento"
            returnKeyType="send"
            value={typeEquipament}
            onChangeText={setTypeEquipment}
          />
          <SubmitButton onPress={handleSubmit}>Concluir</SubmitButton>
        </Form>
        <CancelSave onPress={() => {}}>Cancelar</CancelSave>
      </Container>
    </Background>
  );
}

TypeEquipament.navigationOptions = ({ navigation }) => ({
  title: 'Tipo de equipamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
