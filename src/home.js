import { createAppend } from './createhtmlAndApend';

export async function displayHomeResults() {
  const url = 'https://api.tvmaze.com/shows';
  try {
    const response = await fetch(url);
    const loadedTvShows = await response.json();
    const randomNumber = Math.floor(Math.random() * 200);
    (loadedTvShows.slice(randomNumber, randomNumber + 20)).forEach((show) => {
      createAppend(content, show);
    });
    return loadedTvShows;
  } catch (error) {
    console.log(error);
    return error;
  }
}