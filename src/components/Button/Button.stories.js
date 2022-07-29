import React from 'react'
// import Center from '../Center/Center';
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
//   decorators : [story => <Center>{story()}</Center>]
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant :'primary',
   label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant :'secondary',
   label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
    variant :'success',
   label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
    variant :'danger',
   label: 'Button',
};
