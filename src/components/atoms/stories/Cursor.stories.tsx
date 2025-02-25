import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import Cursor from '../Cursor';

const meta: Meta<typeof Cursor> = {
  title: 'atoms/Cursor',
  component: Cursor,
  parameters: {
    docs: {
      description: {
        component:
          '`Cursor` 컴포넌트는 마우스 커서를 따라가는 애니메이션을 표시합니다.',
      },
      inline: true,
      story: {
        height: '500px',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cursor>;

export const Default: Story = {
  render: () => (
    <div className="relative h-[500px] w-full">
      <Cursor />
    </div>
  ),
};
