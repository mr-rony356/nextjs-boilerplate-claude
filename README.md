# Next.js 15 Gold Master Boilerplate 🚀

[![CI](https://github.com/mr-rony356/nextjs-boilerplate-claude/actions/workflows/ci.yml/badge.svg)](https://github.com/mr-rony356/nextjs-boilerplate-claude/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)

A comprehensive, production-ready Next.js 15 boilerplate with modern best practices and type-safe architecture. Built with domain-driven design principles and optimized for developer experience.

## ✨ Features

### 🎯 Core Framework
- **Next.js 15** - Latest features including Server Actions, Partial Prerendering (PPR), and optimized caching
- **React 19** - Concurrent features and improved performance
- **TypeScript** - Full type safety across the entire stack
- **Turbopack** - Lightning-fast development builds

### 🎨 Styling & UI
- **Tailwind CSS v4** - High-performance CSS engine with CSS-first configuration
- **Shadcn/UI** - Beautiful, accessible component library built on Radix UI
- **Lucide React** - Modern icon system with 1000+ icons
- **Dark Mode** - Built-in theme support
- **Responsive Design** - Mobile-first approach

### 💾 Database & ORM
- **Drizzle ORM** - TypeScript-first SQL toolkit with type-safe queries
- **Neon Postgres** - Serverless Postgres with database branching
- **Drizzle Kit** - Database migrations and schema management
- **Drizzle Studio** - Visual database explorer
- **Drizzle-Zod** - Automatic schema validation

### 🔐 Authentication
- **Auth.js v5** (Beta) - Modern authentication with the new `auth()` function
- **Multiple Providers** - GitHub, Google, and Credentials authentication
- **Drizzle Adapter** - Seamless database integration
- **Protected Routes** - Middleware-based route protection
- **Session Management** - JWT-based sessions

### 📝 Validation & Forms
- **Zod** - TypeScript-first schema validation
- **Type Inference** - Automatic TypeScript types from schemas
- **Form Handling** - Type-safe form validation
- **Error Messages** - User-friendly validation feedback

### 🛠️ Developer Experience
- **ESLint** - Code quality and consistency
- **Prettier** - Automatic code formatting
- **TypeScript Strict Mode** - Maximum type safety
- **Type Checking** - Pre-commit type validation
- **Hot Reload** - Instant feedback with Turbopack

### 🚀 Production Ready
- **Docker Support** - Containerized deployment
- **Docker Compose** - Multi-service orchestration
- **GitHub Actions** - Automated CI/CD pipelines
- **Security** - CodeQL analysis and best practices
- **Environment Variables** - Secure configuration management

## 📁 Project Structure

```
nextjs-boilerplate-claude/
├── .github/              # GitHub Actions workflows and templates
├── public/               # Static assets
├── src/
│   ├── actions/         # Server Actions
│   ├── app/            # Next.js App Router
│   │   ├── (auth)/    # Authentication pages
│   │   ├── (dashboard)/ # Protected dashboard
│   │   └── api/       # API routes
│   ├── components/     # React components
│   │   ├── ui/       # Shadcn UI components
│   │   ├── auth/     # Authentication components
│   │   └── shared/   # Shared components
│   ├── config/        # Application configuration
│   ├── db/           # Database layer
│   │   ├── schema/  # Drizzle schemas
│   │   └── migrations/ # Database migrations
│   ├── lib/          # Utilities and helpers
│   │   ├── auth.ts  # Auth.js configuration
│   │   ├── utils.ts # Helper functions
│   │   └── validations/ # Zod schemas
│   └── types/        # TypeScript types
├── .env.example       # Environment variables template
├── drizzle.config.ts  # Drizzle configuration
├── next.config.ts     # Next.js configuration
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm
- A Neon Postgres account (free tier available)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/mr-rony356/nextjs-boilerplate-claude.git
cd nextjs-boilerplate-claude
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
# Database
DATABASE_URL=your-neon-postgres-connection-string

# Auth.js
AUTH_SECRET=generate-with-openssl-rand-base64-32
AUTH_URL=http://localhost:3000

# OAuth (Optional)
AUTH_GITHUB_ID=your-github-client-id
AUTH_GITHUB_SECRET=your-github-client-secret
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
```

4. **Set up the database**

```bash
# Generate migrations
npm run db:generate

# Run migrations
npm run db:migrate

# (Optional) Seed the database
npm run db:seed
```

5. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Documentation

- **[Setup Guide](./SETUP.md)** - Detailed setup instructions
- **[Architecture](./ARCHITECTURE.md)** - Architecture overview and patterns
- **[Contributing](./CONTRIBUTING.md)** - Contribution guidelines
- **[Changelog](./CHANGELOG.md)** - Version history

## 🔧 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
npm run format       # Format code with Prettier

# Database commands
npm run db:generate  # Generate migrations from schema
npm run db:migrate   # Run migrations
npm run db:push      # Push schema changes directly (dev only)
npm run db:studio    # Open Drizzle Studio
npm run db:seed      # Seed database with sample data
```

## 🌟 Key Features Explained

### Server Actions

Built-in server-side mutations with full type safety:

```tsx
'use server';

export async function createUser(formData: FormData) {
  const validated = schema.parse(formData);
  await db.insert(users).values(validated);
  revalidatePath('/users');
}
```

### Type-Safe Database Queries

Automatic TypeScript types from your database schema:

```ts
// Define schema
export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  email: text('email').notNull(),
});

// Infer types automatically
export type User = typeof users.$inferSelect;
```

### Protected Routes

Middleware-based authentication with automatic redirects:

```ts
export default auth((req) => {
  if (!req.auth && isProtectedRoute) {
    return NextResponse.redirect('/auth/signin');
  }
});
```

### Form Validation

Type-safe form handling with Zod:

```ts
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type FormData = z.infer<typeof schema>;
```

## 🐳 Docker Deployment

### Using Docker

```bash
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
```

### Using Docker Compose

```bash
docker-compose up
```

## 🔒 Security

- CSRF protection via Server Actions
- SQL injection protection via Drizzle ORM
- XSS protection via React
- Secure authentication with Auth.js
- Environment variable validation
- CodeQL security scanning

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/UI](https://ui.shadcn.com/) - Beautiful component library
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [Auth.js](https://authjs.dev/) - Authentication library
- [Neon](https://neon.tech/) - Serverless Postgres

## 📧 Contact

Omor Faruk Rony - [@mr-rony356](https://github.com/mr-rony356)

Project Link: [https://github.com/mr-rony356/nextjs-boilerplate-claude](https://github.com/mr-rony356/nextjs-boilerplate-claude)

---

⭐ If you find this project helpful, please give it a star!
