# Next.js 15 Gold Master Boilerplate

A comprehensive, production-ready Next.js 15 boilerplate with modern best practices and type-safe architecture.

## 🚀 Tech Stack

### Core Framework
- **Next.js 15** (App Router) - Server Actions, Partial Prerendering (PPR), new caching defaults
- **React 19** - Latest React features
- **TypeScript** - Full type safety

### Styling & UI
- **Tailwind CSS v4** - New high-performance engine with CSS-first configuration
- **Shadcn/UI** - Beautiful, accessible component library
- **Lucide React** - Icon system

### Database & ORM
- **Drizzle ORM** - Type-safe SQL toolkit
- **Neon Postgres** - Serverless Postgres with database branching
- **Drizzle-Zod** - Schema validation integration

### Authentication
- **Auth.js v5** (Beta) - Universal auth() function with Drizzle adapter

### Validation
- **Zod** - TypeScript-first schema validation

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route group
│   ├── (dashboard)/       # Protected routes
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── auth/             # Auth-specific components
│   └── shared/           # Shared components
├── db/                    # Database layer
│   ├── schema/           # Drizzle schemas
│   ├── migrations/       # Database migrations
│   ├── index.ts          # Database client
│   └── seed.ts           # Seed data
├── lib/                   # Utilities
│   ├── auth.ts           # Auth.js configuration
│   ├── utils.ts          # Helper functions
│   └── validations/      # Zod schemas
├── types/                 # TypeScript types
└── middleware.ts          # Next.js middleware
```

## 🛠️ Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/mr-rony356/nextjs-boilerplate-claude.git
cd nextjs-boilerplate-claude
npm install
```

### 2. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Fill in your environment variables:

```env
# Required
DATABASE_URL=your-neon-postgres-url
AUTH_SECRET=generate-with-openssl-rand-base64-32

# Optional OAuth providers
AUTH_GITHUB_ID=your-github-id
AUTH_GITHUB_SECRET=your-github-secret
```

### 3. Database Setup

```bash
# Generate migrations
npm run db:generate

# Run migrations
npm run db:migrate

# (Optional) Seed database
npm run db:seed

# Open Drizzle Studio
npm run db:studio
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📚 Key Features

### Authentication
- Multiple OAuth providers (GitHub, Google)
- Credential-based authentication
- Protected routes with middleware
- Session management
- User roles and permissions

### Database
- Type-safe queries with Drizzle ORM
- Automatic TypeScript types from schema
- Database branching for development
- Migration system

### UI/UX
- Responsive design
- Dark mode support
- Accessible components
- Toast notifications
- Loading states

### Developer Experience
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Type checking scripts
- Fast Refresh with Turbopack

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
npm run db:push      # Push schema changes directly (dev)
npm run db:studio    # Open Drizzle Studio
npm run db:seed      # Seed database with sample data
```

## 🏗️ Architecture Decisions

### Domain-Driven Structure
The project follows a domain-driven approach where features are organized by business domain rather than technical layer. This makes the codebase more maintainable as it grows.

### Server Components First
Leverages React Server Components by default, only using Client Components when necessary for interactivity.

### Type Safety
Every layer is fully typed:
- Database schema → TypeScript types (via Drizzle)
- API inputs/outputs → Zod schemas
- Component props → TypeScript interfaces

### Progressive Enhancement
Forms work without JavaScript, enhanced with client-side validation when available.

## 📖 Documentation Links

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Shadcn/UI Docs](https://ui.shadcn.com/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team/docs)
- [Neon Docs](https://neon.tech/docs)
- [Auth.js v5 Docs](https://authjs.dev/getting-started)
- [Zod Docs](https://zod.dev)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT
