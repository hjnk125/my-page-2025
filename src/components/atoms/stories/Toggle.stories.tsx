import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import Toggle from '../Toggle';
import { useState } from 'react';

const Template = () => {
  const [value, setValue] = useState(true);

  const onClick = () => {
    setValue((prev) => !prev);
  };

  return <Toggle value={value} onClick={onClick} />;
};

const meta: Meta<typeof Toggle> = {
  title: 'atoms/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: '`Toggle` 컴포넌트는 boolean 값을 조정할 때 사용합니다.',
      },
    },
    args: {
      value: true,
    },
    argTypes: {
      value: {
        description: 'boolean 값을 입력합니다.',
        table: {
          type: { summary: 'boolean' },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => <Template />,
};
