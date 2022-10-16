import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <TextInput.Input placeholder="Type your email address" />
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
