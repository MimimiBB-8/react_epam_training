import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';
import '../../styles/global.css'
export default {
  title: 'Base Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Search = Template.bind({});
Search.args = {
  title: 'Search',
  classname: 'search_button'
};

export const Add = Template.bind({});
Add.args = {
  title: '+ Add movie',
  classname:'add_movie'
};

export const Submit = Template.bind({});
Submit.args = {
  title: 'Submit',
  classname: 'base_button'
};

export const Reset = Template.bind({});
Reset.args = {
  title: 'Reset',
  classname: 'reset_button'
};
