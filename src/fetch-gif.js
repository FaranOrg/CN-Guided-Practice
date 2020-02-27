async function fetchGIF(apiKey, searchTerm) {
  if (!apiKey) {
    throw new Error('Please provide API key. You may want to refer to slides to get one or reach out to a volunteer.');
  }
  if(!searchTerm) {
    throw new Error('There is no search term. You may want to define search term something like a "cat", "dog" or whatever you like.');
  }
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=G&lang=en`;
  const response = await fetch(url);
  const result = await response.json();
  if(response.status < 200 || response.status >= 300) {
    throw new Error('Something went wrong while downloading a gif... Please ask a volunteer for help :)');
  }
  if(Array.isArray(result.data) && result.data.length === 0) {
    throw new Error(`No gifs were found for "searchTerm": ${searchTerm}, please try another one.`);
  }
  const randomNum = Math.floor(Math.random() * Math.floor(result.data.length));
  return result.data[randomNum].images.original.url;
}

export default fetchGIF;
