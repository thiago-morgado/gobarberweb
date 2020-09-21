import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import AvatarInput from './AvatarInput';
import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço" />
        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Digite sua senha Antiga"
        />
        <Input
          name="password"
          type="password"
          placeholder="Digite sua nova senha"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Comfirme A senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair do Gobarber
      </button>
    </Container>
  );
}
