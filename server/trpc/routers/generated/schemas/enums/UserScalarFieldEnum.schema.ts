/* eslint-disable */
import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'emailVerified',
  'password',
  'image',
  'zenstack_guard',
  'zenstack_transaction',
]);
