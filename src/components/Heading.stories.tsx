import { Heading, HeadingProps } from './Heading';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem Ipsum.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
    args: {
        size: 'md',
      },
      argTypes: {
        children: {
          table: {
            disable: true,
          },
        },
        asChild: {
          table: {
            disable: true,
          },
        },
      },
};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h2>Testando</h2>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
