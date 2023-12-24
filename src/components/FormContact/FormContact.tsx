import React, { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useContact } from 'hooks';
import type { ContactValues } from 'api/client';
import Form from 'components/Form';

import { schema } from './schema';

import './FormContact.scss';

interface Props {
  onSuccess?: () => void;
}

const FormContact: React.FC<Props> = ({ onSuccess }) => {
  const { onSendMessage } = useContact();

  const { handleSubmit, register, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((values: Omit<ContactValues, 'dishId'>) => {
    onSendMessage(values).then(() => {
      onSuccess?.();
      reset();
    });
  }, [reset, onSendMessage, onSuccess]);

  return (
    <Form className='form-contact' submitText='Contact' onSubmit={handleSubmit(onSubmit)}>
      <div className='field'>
        <label htmlFor="name">Full Name</label>
        <input type='text' placeholder='John Doe' {...register('name')} />
        <span className='error-message'>{errors.name?.message}</span>
      </div>

      <div className='field'>
        <label htmlFor="email">Email</label>
        <input type='text' placeholder='text@email.com' {...register('email')}/>
        <span className='error-message'>{errors.email?.message}</span>
      </div>

      <div className='field'>
        <label htmlFor="email">Email</label>
        <select value={0} {...register('target')}>
          <option value={0}>Option 1</option>
          <option value={1}>Option 1</option>
          <option value={2}>Option 1</option>
        </select>
        <span className='error-message'>{errors.email?.message}</span>
      </div>

      <div className='field'>
        <label htmlFor="message">Message</label>
        <textarea placeholder='Type a message' {...register('message')}/>
        <span className='error-message'>{errors.email?.message}</span>
      </div>
    </Form>
  );
};

export default FormContact;
