# Contributing to ProjectTaskr

Thank you for considering contributing to ProjectTaskr! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of others.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue tracker to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.

When creating a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots if possible**
- **Include details about your environment**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include as many details as possible:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**
- **Include screenshots if possible**

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the JavaScript and React styleguides
- Include thoughtfully-worded, well-structured tests
- Document new code
- End all files with a newline

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/iamvtyagi/projecttaskr.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Follow the setup instructions in the README.md file to run the project locally
6. Commit your changes: `git commit -m 'Add some feature'`
7. Push to the branch: `git push origin feature/your-feature-name`
8. Submit a pull request

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Prefer const over let. Never use var
- Use template literals instead of string concatenation
- Use destructuring assignment
- Use arrow functions over anonymous functions
- Use async/await over promises
- Add trailing commas for cleaner diffs

### React Styleguide

- Use functional components with hooks instead of class components
- Use React.Fragment instead of divs when possible
- Use the Context API for state management
- Use custom hooks to share logic between components
- Use prop-types for type checking

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.
