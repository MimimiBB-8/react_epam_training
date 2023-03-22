import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieCard from '../components/MovieCard/MovieCard';
import '../../styles/global.css'
import { Provider } from 'react-redux';
import { store } from '../store';

export default {
  title: 'Movie card',
  component: MovieCard,

} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => <Provider store={store}> <MovieCard {...args} /></Provider>;

export const MovieCardWithoutProps = Template.bind({});
MovieCardWithoutProps.args = {
  keyID: 0,
  title: '',
  year: '',
  genres: [
  ],
  urlImg: '',
};
export const FirstMovie = Template.bind({});
FirstMovie.args = {
  keyID: 337167,
  title: 'Fifty Shades Freed',
  year: '2018-02-07',
  genres: ["Drama", "Romance"],
  urlImg: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
};

