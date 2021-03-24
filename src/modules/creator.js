import { handleActions } from 'redux-actions';
import oval from '../images/oval.svg';

// state
const initialState = [
  //
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
  { id: 1, name: 'beethoven', portrait: oval },
];

const creator = handleActions({}, initialState);

export default creator;
