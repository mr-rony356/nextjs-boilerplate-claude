# Setup Guide

This guide will walk you through setting up the Next.js boilerplate from scratch.

## Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm
- A Neon Postgres account (free tier available)
- GitHub and/or Google OAuth credentials (optional)

## Step 1: Clone and Install

```bash
git clone https://github.com/mr-rony356/nextjs-boilerplate-claude.git
cd nextjs-boilerplate-claude
npm install
```

## Step 2: Database Setup (Neon)

1. Create a free account at [Neon](https://neon.tech)
2. Create a new project
3. Copy your connection string
4. It should look like: `postgresql://user:password@host/dbname?sslmode=require`

## Step 3: Environment Variables

```bash
cp .env.example .env
```

Fill in your `.env` file:

### Required Variables

```env
DATABASE_URL=your-neon-postgres-connection-string
AUTH_SECRET=generate-using-command-below
AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Generate AUTH_SECRET:
```bash
openssl rand -base64 32
```

### Optional OAuth Setup

#### GitHub OAuth

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - Application name: Your app name
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and generate a Client Secret
5. Add to `.env`:

```env
AUTH_GITHUB_ID=your-github-client-id
AUTH_GITHUB_SECRET=your-github-client-secret
```

#### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials > Create Credentials > OAuth client ID
5. Configure consent screen
6. Create OAuth 2.0 Client ID:
   - Application type: Web application
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
7. Add to `.env`:

```env
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
```

## Step 4: Database Migration

```bash
# Generate migration files from schema
npm run db:generate

# Run migrations
npm run db:migrate

# (Optional) Seed the database
npm run db:seed
```

## Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 6: Explore Drizzle Studio (Optional)

Drizzle Studio is a visual database explorer:

```bash
npm run db:studio
```

Open [https://local.drizzle.studio](https://local.drizzle.studio)

## Production Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to update these for production:

```env
DATABASE_URL=your-production-neon-db-url
AUTH_SECRET=new-secret-for-production
AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

Update OAuth callback URLs:
- GitHub: `https://yourdomain.com/api/auth/callback/github`
- Google: `https://yourdomain.com/api/auth/callback/google`

## Common Issues

### Database Connection Issues

- Ensure your DATABASE_URL includes `?sslmode=require`
- Check if your IP is allowed in Neon dashboard
- Verify connection string is correct

### OAuth Issues

- Verify callback URLs match exactly
- Check client IDs and secrets are correct
- Ensure OAuth apps are not in development mode (for production)

### Build Errors

- Run `npm run type-check` to find TypeScript errors
- Clear `.next` folder and rebuild
- Ensure all environment variables are set

## Next Steps

- Customize the UI components
- Add your business logic
- Implement additional features
- Read the [Next.js documentation](https://nextjs.org/docs)
- Explore [Drizzle ORM docs](https://orm.drizzle.team/docs)
- Check out [Auth.js documentation](https://authjs.dev)

## Need Help?

- Check the [README.md](./README.md) for more information
- Open an issue on GitHub
- Review Next.js, Drizzle, and Auth.js documentation
