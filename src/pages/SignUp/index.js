import React from 'react';
import {Image} from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';
import Background from '~/components/Background';

import logo from '~/assets/logo.png';

export default function SignUp() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Digite seu nome"
          />
          <FormInput
            icon="mail-outline"
            keybordType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => {}}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
