import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../components/Header/Header';
import '../../styles/global.css'

export default {
  title: 'Header',
  component: Header,

} as ComponentMeta<typeof Header>;

export const HeaderDefault : ComponentStory<typeof Header> = () => <Header></Header>;