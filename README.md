# NextJS Starter Kit

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Getting Started](#getting-started)
- [VS Code Plugins](#vs-code-plugins)
- [File Structure](#file-structure)
- [Guidelines & Conventions](#conventions)
- [Learn More about Next.js](#learn-more-about-next.js)
- [Deploy on Vercel](#deploy-on-vercel)

&nbsp;
<a name="getting-started"></a>

## 🚀 Getting Started

&nbsp;

### Prerequisites

- NodeJS 16
- NPM / Yarn

&nbsp;

### First Run

### `1. npm install / yarn install`

Install all the dependencies.

&nbsp;

### `2. npm run dev / yarn dev`

First Run.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

&nbsp;

### `3. npm run build / yarn build`

Generates an optimized version of your application for production.
Use it only for prod.

&nbsp;

### `4. npm run start / yarn start`

Start a Next.js production server

&nbsp;

### `5. npm run test / yarn test`

Will run the tests with `--verbose` option.

For `--watch` option use `npm run test:watch / yarn test:watch`

For Coverage tests use `npm run test:coverage / yarn test:coverage`.

> - `On every commit` the linting process will be executed.
> - `On every push` tests will be executed.

&nbsp;

### `6. npm run test:ci / yarn test:ci`

Execute the test code on CI/CD.

&nbsp;

### `7. npm run prepare:hooks / yarn prepare:hooks`

Install husky for hooks.

&nbsp;

## 🖥️  Stack

&nbsp;

### Main

- Next.js (`12.1`)
- ReactJS (`18.1`)
- Typescript (`4.7`)

### Styling

- Tailwind CSS.

### UI Components

- Can add MaterialUI, TailwindUI, etc

### Date manipulation

- Date-fns

### Testing

- Jest + React Testing Library (plus some plugins).

### HTTP Client

- [SWR](https://nextjs.org/docs/basic-features/data-fetching/client-side#:~:text=data%20fetching%20called-,SWR,-.%20It%20is%20highly])

### Git Hooks

- Husky & Lint staged
- Runs prettier and eslint on @pre-commit & jest/tests on @pre-push

### Routing

- Next.js Router.

### Lint & Formatting

- ESlint & Prettier Configured
- Lint Staged
- Lints
  - Next.js
  - React
  - React hooks
  - Typescript
  - Jest
  - Testing library

&nbsp;
<a name="vs-code-plugins"></a>

## 👨🏼‍💻 VS Code Plugins

&nbsp;

### Must

- ES7 React/Redux
- ESLint
- Prettier
- EditorConfig for VS Code
- DotENV
- Tailwind CSS IntelliSense

&nbsp;

### Optionals

- Auto Close Tag
- Auto Rename Tag
- Auto import - ES6
- Path Intellisense
- TODO Highlight

&nbsp;
<a name="file-structure"></a>

## File Structure

Folder structure is based on productivity and some best practices (NextJS, public recommendations, etc):

```text
public
├── images                        * Assets that are imported into your components(images, custom svg, etc).
└── ...
src
├── components                    * Components of the projects that are not the main views.
│   ├── ui                        * Generic and reusable across the whole app. Presentational components eg. Buttons, Inputs, Checkboxes.
│   ├── layout                    * Unique and one time use components that will help with app structure/layout (guards, navigation, etc).
│   ├── shared                    * Reusable components across different domains or features.
│   ├── <domain component>        * Belong to a specific domain. Reusable in different Pages.
│   └── ...
├── plugins                       * Init and config plugins(axios, react-query, react-feature-flags, etc).
│   └── ...
├── services                      * All the common services. e.g. hubs, store (redux/context API/ Mobx), etc.
│   ├── api                       * Abstractions for making API requests
│   └── context                   * All the Contexts used in the app for Auth, alerts, etc
│        └── ...
├── styles                        * Global/Common styles configuration (variables, main theme, mixins, etc) on Sass/Less.
├── test                          * Utilities, mocks and config files for tests.
│   └── pages                     * All the tests for Pages Folder
│        └── ...
├── hooks                         * Custom hooks to isolate reusable logic.
├── models                        * Constructors that will mold incoming and outgoing server data into repeatable and scalable objects.
├── constants                     * Anything referenced globally and no Dynamic information.
├── utils                         * Functions and utilities (for env variables, for tests, for regex value testing, filters, etc.)
├── pages                         * Presentational components that represents pages/views.
│   ├── private                   * Private views (authenticated user)
│   │    └── ...
│   ├── public                    * Public views (guest user)
│   │    └── ...
│   └── ...                       * Shared views
├── _app.tsx                      * Entry point of the application (any initial configuration, global styles or/and plugins).
├── index.tsx                     * Main initial page
└── .vscode                       * VS Code workspace settings to work with ESLint rules and formatting
                                    (you can also lint or fix on save 😉).
```

**Some important root/config files**

```text
.
├── src
│   └── tests               
│        └── jest.setup.ts  * Jest extra configuration.
├── .editorconfig           * Coding styles (also by programming language).
├── .env                    * Environment variables (env.production, env.dev, env.development, env.staging, etc).
├── .eslintrc.json          * ESLint configuration and rules.
├── .prettierrc             * Formatting Prettier options.
├── tsconfig.js             * Typescript configuration.
├── next.config.js          * Next.js configuration.
├── postcss.config.js       * POST CSS configuration.
├── tailwind.config.js      * Tailwind CSS configuration.
├── lint-staged.config      * Lint Staged configuration.
└── jest.config.js          * Jest configuration for tests.
```

&nbsp;
<a name="conventions"></a>

## 📚 Guidelines & Conventions

Here are a few important conventions:

### JSX vs JS

Since JSX is not standard JS it should go into it's own extension ie. `.ts` for TypeScript, `.jsx` for JSX.
Now days, most of the IDE's support both extensions for ReactJs, so more important reason today is that helps to indicate what it is: a component or plain js?.

### Naming

- **Component names** should always be **multi-word**, except for root `App` components. Use `UserCard` or `ProfileCard` instead of `Card` for example.
  Each component should be in its own file.

  ```text
  Gives more meaning and context of what the component does.
  ```

- **Components files** should be always **PascalCase**/**kebab-case** except for HOC's. Use `UserCard.jsx` or `user-card.jsx`.

  ```text
  PascalCase works best with autocompletion in code editors, as it’s consistent with how we reference
  components in JS(X) and templates, wherever possible.

  However, mixed case filenames can sometimes create issues on case-insensitive file systems, which
  is why kebab-case is also perfectly acceptable.
  ```

- **Components are named accordingly to it's relative path to components or src**. Given that, a component located at `src/components/User/List.jsx` would be named as `UserList`. A component located at `src/screens/User/List` would be named as `ScreensUserList`.
- **Components that are in a folder with same name, don’t repeat the name in the component**. Considering that, a component located at `src/components/User/List/List.jsx` would be named as `UserList` and **NOT** as `UserListList`.

  ```text
  The name we give to the components, should be clear and unique in the application, in order to
  make them being easier to find and to avoid possible confusions.

  Easy search inside the project.
  ```

- Components that are only **used once per page should begin with the prefix “The”**, to denote that there can be only one. For example for a navbar or a footer you should use `TheNavbar.jsx` or `TheFooter.jsx`.

  ```text
  This does not mean the component is only used in a single page,
  but it will only be used once per page.

  These components never accept any props, since they are specific to your app, not their context
  within your app.

  If you find the need to add props, it’s a good indication that this is actually a reusable
  component that is only used once per page for now.
  ```

- **High Order Components** (HOC) file and folder name in **lowerCamelCase** and use the prefix `with`.

  ```text
  Generic convention
  ```

- **Always use full name** instead of abbreviation in the name of your components. For example don’t use `UDSettings`, use instead `UserDashboardSettings`.

  ```text
  Keep things clear
  ```

- **Each page is a react class component** having some state. A **page component** uses other components to assemble the page like lego blocks.

  ```text
  Single entry point by feature or page.

  Keep the pages in a separated folder in the root of src, because they will be
  grouped accordingly to the route definition and not by modules.
  ```

- **Keep components shallow**. If a components has a lot of nested markup then the chances of reusing it decreases. Instead we should take advantage of composition. It saves us from prop drilling or having to reach out to context api.

  ```text
  Reusable and Readable code.

  Passing down props to multiple child components is what they call a code smell.
  ```

- **Presentational components** are those who **don’t have internal state**. Their role is to show certain pieces of UI or Layout. They are provided data via props or context api or state management.
- **Container components** are those which **deals with business logic**. They usually have some state and only render presentational components based on the logic.

  ```text
  This way Presentational and Container components complete the puzzle together.

  By dividing the responsibilities, code becomes easier to maintain and debug.
  ```

### Organization / Best practices

- Use a **central export file** (Barrel export -> `index.ts`) in the components directory. With this file we can just import all of our components into it and export them. This will allow us to import components into any file from the same place.
- **Group components** by `module/feature` inside `components folder`.
- Keep **generic components** by context inside `src/components/ui` or `src/components/layout`.
- **Keep pages simple**, with minimum structure and code.
- Group pages accordingly to route definition. For a route `/user/list` we would have a page located at `/src/pages/User/List.jsx`.

&nbsp;

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

&nbsp;
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
