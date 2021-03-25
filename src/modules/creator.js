import { createAction, handleActions } from 'redux-actions';
import chopin from '../images/chopin.svg';
import beethoven from '../images/beethoven.svg';
import hoon from '../images/hoon.svg';
import gogh from '../images/gogh.svg';
import picasso from '../images/picasso.svg';

const SELECT_ALL = 'creator/SELECT_ALL';
const SELECT_MUSICIAN = 'creator/SELECT_MUSICIAN';
const SELECT_DEVELOPER = 'creator/SELECT_DEVELOPER';
const SELECT_PAINTER = 'creator/SELECT_PAINTER';

export const selectAll = createAction(SELECT_ALL);
export const selectMusician = createAction(SELECT_MUSICIAN);
export const selectDeveloper = createAction(SELECT_DEVELOPER);
export const selectPainter = createAction(SELECT_PAINTER);

const states = [
  { id: 1, name: 'Hoon Jeong', category: 'Developer', portrait: hoon },
  { id: 2, name: 'Chopin', category: 'Musician', portrait: chopin },
  { id: 3, name: 'Beethoven', category: 'Musician', portrait: beethoven },
  { id: 4, name: 'Gogh', category: 'Painter', portrait: gogh },
  { id: 5, name: 'Picasso', category: 'Painter', portrait: picasso },
];

const initialState = [
  { id: 1, name: 'Hoon Jeong', category: 'Developer', portrait: hoon },
  { id: 2, name: 'Chopin', category: 'Musician', portrait: chopin },
  { id: 3, name: 'Beethoven', category: 'Musician', portrait: beethoven },
  { id: 4, name: 'Gogh', category: 'Painter', portrait: gogh },
  { id: 5, name: 'Picasso', category: 'Painter', portrait: picasso },
];

const creator = handleActions(
  {
    [SELECT_ALL]: (state) => states,
    [SELECT_MUSICIAN]: (state) =>
      states.filter((creator) => creator.category === 'Musician'),
    [SELECT_DEVELOPER]: (state) =>
      states.filter((creator) => creator.category === 'Developer'),
    [SELECT_PAINTER]: (state) =>
      states.filter((creator) => creator.category === 'Painter'),
  },
  initialState,
);

export default creator;
