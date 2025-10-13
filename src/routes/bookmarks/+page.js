export async function load({ fetch }) {
	const username = 'ruzel'
	const apiToken = 'ruzel:CAA371384455A205D7DB'
	const res = await fetch(
		`https://api.pinboard.in/v1/posts/recent?auth_token=${username}:${apiToken}&count=10&format=json`
	)
	const bookmarks = await res.json()
	return { bookmarks: bookmarks.posts }
}
