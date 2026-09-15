import type { FormField } from './types';

// todo: Add fun copy for placeholders
export const contactFormFields: FormField[] = [
  {
    id: 'name',
    label: 'name',
    type: 'text',
    placeholder: 'what is your name?',
    autoComplete: 'name',
  },
  {
    id: 'email',
    label: 'email',
    type: 'email',
    placeholder: 'email address',
    autoComplete: 'email',
  },
  {
    id: 'location',
    label: 'where are you?',
    type: 'text',
    placeholder: 'country / time zone',
    autoComplete: 'country-name',
  },
];
