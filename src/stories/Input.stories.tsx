import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormItem from '../components/BasicForm/FormItem';

export default {
    title: 'Base Input',
    component: FormItem,
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args) => <FormItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'title',
    id: '2345',
    type: 'text',
    placeholder: 'Title'
}

export const Title = Template.bind({});
Title.args = {
    id: 'title',
    title: 'title',
    type: 'text',
    placeholder: 'Enter title',
    name: 'title'
}


export const Release = Template.bind({});
Release.args = {
    id: 'RELEASE DATE',
    title: 'RELEASE DATE',
    type: 'date',
    placeholder: 'Select Date',
    name: 'release_date'
}

export const URL = Template.bind({});
URL.args = {
    id: 'urlMovie',
    title: 'movie url',
    type: 'url',
    placeholder: 'https://',
    name: 'poster_path'
}

export const Genre = Template.bind({});
Genre.args = {
    id: 'genre',
    title: 'genres',
    type: 'select',
    placeholder: 'Choose genres',
    name: 'genres'
}

export const Rating = Template.bind({});
Rating.args = {
    id: 'rating',
    title: 'rating',
    type: 'number',
    placeholder: 'Inter rating',
    name: 'rating'
}

export const Time = Template.bind({});
Time.args = {
    id: 'time',
    title: 'RUNTIME',
    type: 'number',
    placeholder: 'Inter minutes',
    name: 'runtime'
}
