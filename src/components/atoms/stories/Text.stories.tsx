import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import Text from '../Text';

const meta: Meta<typeof Text> = {
  title: 'atoms/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: '`Text` 컴포넌트는 화면에 글자를 표시할 때 사용합니다.',
      },
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    className: 'theme-text-color',
  },
  argTypes: {
    as: {
      description: 'html 태그를 입력합니다. 기본값은 "span"입니다.',
      table: {
        type: { summary: 'keyof JSX.IntrinsicElements' },
        defaultValue: { summary: 'span' },
      },
      control: { type: 'text' },
    },
    children: {
      description: '화면에 표시할 글자를 입력합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      description: 'Tailwind css의 클래스 사용 가능합니다.',
      table: {
        type: { summary: 'string (Tailwind CSS class names)' },
      },
    },
    typography: {
      description: '지정된 typography 타입을 입력합니다.',
      control: 'select',
      options: [
        'hero',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'tagline',
        'large',
        'medium',
        'regular',
        'small',
        'tiny',
      ],
      defaultValue: 'regular',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regular' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  tags: ['!dev'],
  args: {
    children: 'Sample text goes here',
  },
};
export const Hero: Story = {
  args: {
    typography: 'hero',
  },
};
export const H1: Story = {
  args: {
    typography: 'h1',
  },
};
export const H2: Story = {
  args: {
    typography: 'h2',
  },
};
export const H3: Story = {
  args: {
    typography: 'h3',
  },
};
export const H4: Story = {
  args: {
    typography: 'h4',
  },
};
export const H5: Story = {
  args: {
    typography: 'h5',
  },
};
export const Tagline: Story = {
  args: {
    typography: 'tagline',
  },
};
export const Large: Story = {
  args: {
    typography: 'large',
  },
};
export const Medium: Story = {
  args: {
    typography: 'medium',
  },
};
export const Regular: Story = {
  args: {
    typography: 'regular',
  },
};
export const Small: Story = {
  args: {
    typography: 'small',
  },
};
export const Tiny: Story = {
  args: {
    typography: 'tiny',
  },
};
export const Sample: Story = {
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: { sourceState: 'none' },
    },
  },
  render: () => (
    <div className="theme-text-color grid grid-cols-[100px_1fr] items-end gap-1 truncate">
      <Text as="label" typography="tagline" className="text-gray">
        tiny
      </Text>
      <Text as="p" typography="tiny">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        small
      </Text>
      <Text as="p" typography="small">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        regular
      </Text>
      <Text as="p" typography="regular">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        medium
      </Text>
      <Text as="p" typography="medium">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        large
      </Text>
      <Text as="p" typography="large">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        h5
      </Text>
      <Text as="p" typography="h5">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        h4
      </Text>
      <Text as="p" typography="h4">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        h3
      </Text>
      <Text as="p" typography="h3">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        h2
      </Text>
      <Text as="p" typography="h2">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        h1
      </Text>
      <Text as="p" typography="h1">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Text as="label" typography="tagline" className="text-gray">
        hero
      </Text>
      <Text as="p" typography="hero">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  ),
};
