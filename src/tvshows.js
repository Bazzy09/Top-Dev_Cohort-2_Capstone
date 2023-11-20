import { createAppend } from "./createhtmlAndApend";

export async function getShowsList() {
  const url = 'https://api.tvmaze.com/shows';
  try {
    console.log('Fetching TV shows...');
    const response = await fetch(url);
    const loadedTvShows = await response.json();
    loadedTvShows.forEach(show => {
      createAppend(content, show)
    })
    return loadedTvShows;
  } catch (error) {
    console.log(error);
    return error;
  }
}