import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import Marquee from '../Marquee';
import Text from '@components/atoms/Text.tsx';

const meta: Meta<typeof Marquee> = {
  title: 'molecules/Marquee',
  component: Marquee,
  parameters: {
    docs: {
      description: {
        component:
          '`Marquee` 컴포넌트는 가로로 흘러가는 배너를 표시할 때 사용합니다.',
      },
    },
    argTypes: {
      children: {
        description: '배너 내부의 내용을 입력합니다.',
        table: {
          type: { summary: 'ReactNode' },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Text className="mx-2">
          The quick brown fox jumps over the lazy dog.
        </Text>
        <Text className="mx-2">
          The quick brown fox jumps over the lazy dog.
        </Text>
        <Text className="mx-2">
          The quick brown fox jumps over the lazy dog.
        </Text>
        <Text className="mx-2">
          The quick brown fox jumps over the lazy dog.
        </Text>
        <Text className="mx-2">
          The quick brown fox jumps over the lazy dog.
        </Text>
        <Text className="mx-2">
          The quick brown fox jumps over the lazy dog.
        </Text>
      </>
    ),
  },
};
