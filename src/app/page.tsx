import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { auth } from '@/lib/auth';
import {
  Database,
  Lock,
  Palette,
  Zap,
  ArrowRight,
  Code2,
} from 'lucide-react';

export default async function Home() {
  const session = await auth();

  const features = [
    {
      icon: Zap,
      title: 'Next.js 15',
      description:
        'Server Actions, Partial Prerendering, and new caching defaults',
    },
    {
      icon: Palette,
      title: 'Tailwind CSS v4',
      description: 'High-performance engine with CSS-first configuration',
    },
    {
      icon: Database,
      title: 'Drizzle ORM',
      description: 'Type-safe database queries with Neon Postgres',
    },
    {
      icon: Lock,
      title: 'Auth.js v5',
      description: 'Secure authentication with multiple providers',
    },
    {
      icon: Code2,
      title: 'TypeScript',
      description: 'Full type safety across the entire stack',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-6xl font-bold tracking-tight">
              Next.js Gold Master
              <span className="block text-primary">Boilerplate</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              A production-ready starter template with Next.js 15, TypeScript,
              Tailwind CSS v4, Drizzle ORM, and Auth.js v5
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              {session ? (
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild size="lg">
                    <Link href="/auth/signin">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link
                      href="https://github.com/mr-rony356/nextjs-boilerplate-claude"
                      target="_blank"
                    >
                      View on GitHub
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Everything You Need</h2>
            <p className="text-xl text-muted-foreground">
              Built with modern technologies and best practices
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Ready to Build?</CardTitle>
              <CardDescription className="text-lg">
                Clone the repository and start building your next project
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/auth/signin">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            Built with ❤️ using Next.js 15 •{' '}
            <Link
              href="https://github.com/mr-rony356/nextjs-boilerplate-claude"
              className="underline underline-offset-4 hover:text-primary"
              target="_blank"
            >
              View Source
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
