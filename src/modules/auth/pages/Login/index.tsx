import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import S from './index.style'; 

const loginPage: React.FC = () => {
  return (
    <S.Container>
      <S.Card>
        <AntDesign style={{ alignSelf: 'center' }} name="user" size={36} color="#4444ff" />
        <S.Label style={{ marginBottom: 12 }}>LOGIN</S.Label>
        <S.Input placeholder="Usuário" />
        <S.Input placeholder="Senha" />
        <S.Button>
          <S.BTInner>Entrar</S.BTInner>
        </S.Button>
      </S.Card>
    </S.Container>
  );
}

export default loginPage;