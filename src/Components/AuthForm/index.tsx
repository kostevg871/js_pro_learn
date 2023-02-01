import { Input } from 'Components/Common/Input';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserSliceAction } from 'Store';
import style from './AuthForm.module.scss';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const changeHandler = (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => {
      const newData = { ...prev };
      newData[fieldName] = event.target.value;
      return newData;
    });
  };

  const dispatch = useDispatch();

  const submitHandler = () => {
    if (formState.password.length < 5) {
      setErrorMessage('пароль слишком короткий');
    } else {
      setErrorMessage('');
      dispatch(UserSliceAction.setUserData({ email: formState.email, token: '123' }));
      console.log(formState, 'отправка');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErrorMessage('пароль слишком короткий');
    } else {
      setErrorMessage('');
    }
  }, [formState.password]);

  return (
    <div className={style.wrapper}>
      <h1>Auth</h1>
      <div className={style.input_group}>
        <Input name="email" value={formState.email} changeHandler={changeHandler('email')}></Input>
        <Input
          name="password"
          value={formState.password}
          changeHandler={changeHandler('password')}
          type="password"
        ></Input>
      </div>

      {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}
      <button type="button" onClick={submitHandler}>
        Auth
      </button>
    </div>
  );
};
