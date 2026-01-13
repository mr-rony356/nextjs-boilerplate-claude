# Architecture Overview

This document provides an overview of the architectural decisions and patterns used in this boilerplate.

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Shadcn/UI** - Component library
- **Lucide React** - Icons

### Backend
- **Next.js API Routes** - Server-side API
- **Server Actions** - Server-side mutations
- **Drizzle ORM** - Database ORM
- **Neon Postgres** - Serverless database

### Authentication
- **Auth.js v5** - Authentication library
- **JWT** - Session management

## Project Structure

```
src/
├── actions/           # Server Actions
├── app/              # Next.js App Router
│   ├── (auth)/       # Auth route group
│   ├── (dashboard)/  # Dashboard route group
│   └── api/          # API routes
├── components/       # React components
│   ├── ui/          # Shadcn UI components
│   ├── auth/        # Auth components
│   └── shared/      # Shared components
├── config/          # Configuration files
├── db/              # Database layer
│   ├── schema/      # Drizzle schemas
│   └── migrations/  # Database migrations
├── lib/             # Utilities and helpers
│   ├── auth.ts      # Auth.js config
│   ├── utils.ts     # Helper functions
│   └── validations/ # Zod schemas
└── types/           # TypeScript types
```

## Key Patterns

### Server Components First

By default, all components are Server Components. Client Components are only used when necessary (user interactions, browser APIs).

```tsx
// Server Component (default)
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}

// Client Component (when needed)
'use client';
export function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Server Actions

Server Actions provide a simple way to perform server-side mutations:

```tsx
'use server';

export async function createUser(formData: FormData) {
  // Validate
  // Mutate database
  // Revalidate cache
}
```

### Type-Safe Database

Drizzle ORM provides full type safety from schema to queries:

```ts
// Define schema
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull(),
});

// Infer types
export type User = typeof users.$inferSelect;

// Type-safe queries
const user = await db.select().from(users).where(eq(users.id, userId));
```

### Form Validation

Zod schemas are used for validation and can be generated from Drizzle schemas:

```ts
import { createInsertSchema } from 'drizzle-zod';

export const insertUserSchema = createInsertSchema(users);
export type UserFormData = z.infer<typeof insertUserSchema>;
```

### Route Protection

Middleware handles route protection:

```ts
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isProtectedRoute = protectedRoutes.includes(pathname);
  
  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }
});
```

## Data Flow

### Authentication Flow

1. User submits credentials
2. Server Action validates data
3. Auth.js verifies credentials
4. JWT token is created
5. User is redirected to dashboard
6. Middleware validates subsequent requests

### Data Mutation Flow

1. User submits form
2. Server Action receives form data
3. Validation with Zod
4. Database mutation with Drizzle
5. Cache revalidation
6. UI updates automatically

## Performance Optimizations

- **Partial Prerendering (PPR)** - Hybrid static/dynamic rendering
- **Server Components** - Reduced JavaScript bundle
- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component
- **Turbopack** - Fast development builds

## Security

- **CSRF Protection** - Built into Server Actions
- **SQL Injection Protection** - Drizzle ORM parameterized queries
- **XSS Protection** - React automatic escaping
- **Authentication** - Auth.js with JWT
- **Environment Variables** - Sensitive data in .env

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Configure environment variables
4. Deploy

### Docker

```bash
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
```

### Docker Compose

```bash
docker-compose up
```

## Future Enhancements

- [ ] Testing setup (Vitest, Playwright)
- [ ] Email verification
- [ ] Password reset flow
- [ ] Role-based access control
- [ ] API rate limiting
- [ ] Logging and monitoring
- [ ] Feature flags
- [ ] Multi-tenancy support
