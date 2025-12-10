# Publishing Andersseen UI to npm

This guide describes how to publish the `lit-components` library to the npm registry.

## Prerequisites

1.  **npm Account**: You need an account on [npmjs.com](https://www.npmjs.com/).
2.  **Login**: Ensure you are logged in to npm in your terminal.
    ```bash
    npm login
    ```

## Publishing Process

1.  **Update Version**:
    Update the `version` field in `package.json` according to semantic versioning (major.minor.patch).

    ```json
    "version": "0.1.0"
    ```

2.  **Build**:
    Run the build command to ensure everything compiles correctly and type definitions are generated.

    ```bash
    npm run build
    ```

    _This generates the `dist/` folder containing the compiled code and `.d.ts` files._

3.  **Publish**:
    Run the publish command.
    ```bash
    npm publish --access public
    ```
    _Note: The `--access public` flag is required for scoped packages (e.g., `@yourusername/lit-components`) or if this is the first publish of a new standard package._

## Configuration Details

- **Files**: Only the `dist` directory is uploaded to npm (configured in `package.json` under `files`).
- **Exports**: The entry point is `dist/index.js` and types are at `dist/index.d.ts`.
- **Dependencies**: `lit`, `clsx`, `cva`, and `tailwind-merge` are listed as dependencies so they are installed automatically for consumers.

## Troubleshooting

- **Authentication Error**: Run `npm login` again.
- **Name Conflict**: If the package name `lit-components` is taken, change the `name` in `package.json` to something unique (e.g., `@your-username/ui-lib`).
