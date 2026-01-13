import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Next.js Boilerplate',
  description:
    'A comprehensive Next.js 15 boilerplate with TypeScript, Tailwind CSS, Drizzle ORM, and Auth.js v5',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/og.png',
  links: {
    github: 'https://github.com/mr-rony356/nextjs-boilerplate-claude',
  },
};
