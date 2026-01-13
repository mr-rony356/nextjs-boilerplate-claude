# Contributing to Next.js Boilerplate

Thank you for considering contributing to this project! Here are some guidelines to help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch for your feature/fix
4. Make your changes
5. Test your changes
6. Submit a pull request

## Development Workflow

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your .env file

# Run database migrations
npm run db:generate
npm run db:migrate

# Start development server
npm run dev

# Type check
npm run type-check

# Format code
npm run format

# Lint code
npm run lint
```

## Code Style

- Use TypeScript for all code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Commit Messages

Use conventional commit messages:

- `feat: add new feature`
- `fix: fix bug`
- `docs: update documentation`
- `style: format code`
- `refactor: refactor code`
- `test: add tests`
- `chore: update dependencies`

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure all tests pass
3. Make sure your code follows the project's style guidelines
4. Update documentation if needed
5. The PR will be merged once approved by maintainers

## Reporting Issues

- Use the GitHub issue tracker
- Provide a clear description
- Include steps to reproduce
- Add screenshots if applicable
- Mention your environment (OS, Node version, etc.)

## Feature Requests

- Open an issue with the "enhancement" label
- Describe the feature in detail
- Explain why it would be useful
- Provide examples if possible

## Questions?

Feel free to open an issue for any questions or concerns.
