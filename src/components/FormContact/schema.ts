import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Full name is a required field!'),
  email: yup.string().required('Email is a required field!').email('Email is not valid!'),
  target: yup.string().required('Target is a required field!'),
  message: yup.string().required('Message is a required field!'),
});
