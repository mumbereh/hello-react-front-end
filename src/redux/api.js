import store from './greetings/store';
import { setRandomGreeting } from './greetings/greetings/greetingsSlice';

const API_URL = 'http://localhost:3000/';

const getRandomGreeting = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  store.dispatch(setRandomGreeting(data.greeting));
};

export default getRandomGreeting;
