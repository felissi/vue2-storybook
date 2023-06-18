The project is a UI component library showcasing various UI components using Storybook. The project is built using Vue.js.

## Installation
To install the project dependencies, run the following command:

```bash
npm install
```
Running the Project
To run the project, you can use one of the following commands:

```bash
npm run serve
```
This will start a development server.

```bash
npm run build
```
This will build the project for production.

```bash
npm run lint
```
This will lint the project files.

Running Storybook
To run Storybook, you can use the following command:

```bash
npm run storybook
```
This will start the Storybook development server. You can then view the UI components and their variations in Storybook.

Building Storybook
To build Storybook, you can use the following command:

```bash
npm run build-storybook
```
This will build the Storybook for production.

## Dependencies
The project utilizes the following dependencies:

- "@vue/cli": "^5.0.8"
- "@vue/cli-service": "^5.0.8"
- "vue": "2.6.12"

## Adding Sass/SCSS support to Storybook
Pre-configured Storybook installations
Some configurations of Storybook already come pre-configured to support Sass/SCSS. If your project meets the following, you're likely ready to go:

1. Storybook >= 7.x with the Vite builder.
2. Storybook >= 7.x with the @storybook/nextjs framework.
3. Storybook >= 6.x with the @storybook/preset-create-react-app and react-scripts@2.x.x or higher.

Setting up Sass and Storybook
Sass is a popular CSS preprocessor that allows developers to write more maintainable and reusable stylesheets. Storybook is an industry-standard tool for developing and testing UI components in isolation. With the help of the @storybook/addon-styling package, developers can easily incorporate Sass stylesheets into their Storybook components.

First, install the required dependencies:

```bash
npm install -D @storybook/addon-styling sass
```

Next, register @storybook/addon-styling in your .storybook/main.js file:

```js
module.exports = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
};
```

This registers the @storybook/addon-styling package as an addon, with options to specify the Sass preprocessor to use.

If you have any global styles you would like to expose for your stories, you can import them into your .storybook/preview.js file:

```js
// .storybook/preview.js
import '../src/index.scss';
```

This ensures that your global Sass styles are applied to all components in Storybook.
That's it! You should now have Sass/SCSS support in your Storybook project, utilizing the @storybook/addon-styling package.

## Contributing
Feel free to contribute to the project by forking the repository and creating a pull request.

## License
This project is licensed under the MIT License.