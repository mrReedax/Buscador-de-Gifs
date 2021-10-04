
export const getGifs = async (category) => {

	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=3&api_key=2LNE1vo404gFBTi5wLX2p2RNq2VdyLr0`;

	const resp = await fetch(url);

	const {data} = await resp.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	})
	
	return (gifs);
}