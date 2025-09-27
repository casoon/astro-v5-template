# Contributing to Astro V5 Template

Thank you for your interest in contributing to this project! 🎉

## Code of Conduct

This project and everyone participating in it is committed to a respectful and friendly environment.

## How to Contribute

### 🐛 Reporting Bugs

- First check if the bug has already been reported
- Create an issue with a clear description
- Include steps to reproduce
- Share your environment details (OS, Node version, etc.)

### 💡 Feature Requests

- Check if the feature has already been suggested
- Describe the feature and its benefits
- Provide examples of use cases

### 🔧 Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

#### Pull Request Guidelines

- Keep changes focused and small
- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Ensure all tests pass: `npm run check`

## Development Setup

```bash
# Clone the repository
git clone https://github.com/casoon/astro-v5-template.git

# Navigate to the directory
cd astro-v5-template

# Install dependencies
npm install

# Start development server
npm run dev
```

## Code Style

- **JavaScript/TypeScript**: Biome for linting
- **Astro Files**: Prettier with `.prettierrc.astro.json`
- **Svelte Files**: Prettier with `.prettierrc.svelte.json`

Before committing:
```bash
npm run check
```

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Maintenance

## Questions?

Create an issue or contact the maintainers.

Thank you for your contribution! 🚀
