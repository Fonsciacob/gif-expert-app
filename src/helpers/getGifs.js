export const getGifs = async (category, offset) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=11&api_key=${process.env.API_KEY}&offset=${offset}`;
    const resp = await fetch(url);
    const { data, pagination } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.fixed_height.url
    }));

    return {
        gifs,
        pagination
    };
}