
export async function getSearchShow() {
  try {
    const searchInput = document.getElementById('search').value;
    const url = 'https://api.tvmaze.com/';
    if (searchInput !== '') {
      const response = await fetch(`${url}search/shows?q=${searchInput}`);
      const processedSearch = fetchedData(response);
      return processedSearch;
    } console.log('No search input provided.');
  } catch (error) {
    console.log(error);
    return error;
  }
}
  
async function fetchedData(response) {
  const result = await response.json();
  if (response.ok) {
    if (result.length === 0) {
      console.log('No movies found.');
    } else {
      console.log(result)
      result.forEach(show => {
        createAppend(content, show)
      })
    }
    return result;
  } console.log(result.Error);
  return result.Error;
}