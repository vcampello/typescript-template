# TypeScript template

A simple typescript project template with support for Node.js type stripping.

| Area                      | Tool                                           |
| ------------------------- | ---------------------------------------------- |
| Tests                     | [vitest](https://vitest.dev/)                  |
| Formatter                 | [Biome](https://biomejs.dev/)                  |
| Linting                   | [Biome](https://biomejs.dev/)                  |
| Tooling and orchestration | [mise](https://mise.jdx.dev/)                  |
| Security                  | [trivy](https://aquasecurity.github.io/trivy/) |

## Usage

```bash
# Setup
mise install
npm install

# Development
npm run dev

# Testing & Linting
npm test
npm run lint

# Build
npm run build

# Security Scan
npm run scan
```
