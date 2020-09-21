import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assests/imgs/logo.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome e obrigatorio'),
  email: Yup.string()
    .email('Insira um email valido')
    .required('Email e obrigatorio'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('A senha e obrigatoria'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>

        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  );
}
