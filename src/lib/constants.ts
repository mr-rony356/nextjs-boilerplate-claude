export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Next.js Boilerplate';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const ITEMS_PER_PAGE = 10;

export const AUTH_ROUTES = [
  '/auth/signin',
  '/auth/signup',
  '/auth/error',
];

export const PROTECTED_ROUTES = [
  '/dashboard',
];

export const PUBLIC_ROUTES = [
  '/',
];
