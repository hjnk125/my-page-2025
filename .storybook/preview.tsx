// @ts-nocheck
import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemeByClassName } from '@storybook/addon-themes';
import DocTemplate from './DocTemplate.mdx';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    docs: {
      page: DocTemplate,
    },
    layout: 'fullscreen',
  },
};

export const decorators = [
  (Story) => {
    return (
      <div className="theme-background-color p-[30px]">
        <Story />
      </div>
    );
  },
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export default preview;
