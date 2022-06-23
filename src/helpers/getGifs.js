export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=L2oBBUoR8MYC5tVNbIDpKKEtjwSi1hNU&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  }));

  return gifs;
};
