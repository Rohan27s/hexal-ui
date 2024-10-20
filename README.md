# HexaUI

**HexaUI** is a modular and customizable UI component library built for React. With a wide range of pre-built, reusable components, HexaUI makes it easy to build modern, responsive user interfaces without sacrificing flexibility.

## Features

- **Pre-built Components**: Includes buttons, cards, modals, and more.
- **Customizable**: Easily style and extend components using Tailwind CSS.
- **Framer Motion Animations**: Built-in animation support with Framer Motion.
- **Storybook Integration**: Fully documented components with interactive previews in Storybook.
- **TypeScript Support**: Type-safe components for better development experience.

## Installation

You can install HexaUI via npm:

```bash
npm install hexal-ui
```

Or, if you're using Yarn:

```bash
yarn add hexal-ui
```

## Usage

HexaUI components are easy to integrate into your React project. Here’s a quick example of how to use the `Button` component.

### Example: Using the Button Component

```tsx
import React from 'react';
import { Button } from 'hexal-ui';

const App = () => {
  return (
    <div className="app-container">
      <Button variant="primary">Click Me</Button>
    </div>
  );
};
export default App;
```
