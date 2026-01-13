'use server';

import { signIn, signOut } from '@/lib/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { signInSchema } from '@/lib/validations/auth';

export async function authenticate(
  _prevState: string | undefined,
  formData: FormData
) {
  try {
    const validatedFields = signInSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      return 'Invalid credentials';
    }

    await signIn('credentials', {
      ...validatedFields.data,
      redirect: false,
    });

    return 'success';
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials';
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: '/' });
}
