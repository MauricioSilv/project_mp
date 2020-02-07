import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, FormInput, SubmitButton, CancelSave } from './styles';
import Background from '~/components/Background';

export default function Adduser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Concluir</SubmitButton>
        </Form>
        <CancelSave onPress={() => {}}>Cancelar</CancelSave>
      </Container>
    </Background>
  );
}

Adduser.navigationOptions = ({ navigation }) => ({
  title: 'Adicionar usuários',
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
