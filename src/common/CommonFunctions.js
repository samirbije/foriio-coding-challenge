
export const baseApiUrl = `https://api.foriio.com/api/v1`;

export const getUrlId = () => {
	var urlParam = window.location.pathname.split("/").pop();
	return urlParam;
}

export function callAPI(url) {

	let api_call = fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
	});

	return api_call
		.then((resp) => resp.json())
		.then(json => (json))
		.catch((err) => {
			console.log("Api call error !!")
		});
}

