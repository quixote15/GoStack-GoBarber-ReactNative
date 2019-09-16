import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';
import Background from '~components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <Background>
      <Input
        style={{marginTop: 30}}
        icon="call"
        placeholder="Digite seu nome"
      />

      <Button>Entrar</Button>
    </Background>
  );
}
