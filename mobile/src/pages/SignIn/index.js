import React from 'react';

import Background from '~/components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  TextCenter,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <TextCenter>MP</TextCenter>

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => {}}>
          <SignLinkText>Criar cadastro</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
