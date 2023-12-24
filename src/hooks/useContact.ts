import client from 'api';
import type { ContactValues } from 'api/client';

export const useContact = () => {
  const onSendMessage = (values: ContactValues) => client.sendMessage(values);

  return {
    onSendMessage,
  };
};
