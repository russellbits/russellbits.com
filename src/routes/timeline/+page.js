// src/routes/projects/+page.js
import { reformatDate } from '$lib/utils'
// @ts-ignore
export const load = async ({ fetch }) => {
	const response = await fetch('/timeline.json')
	const timeline = await response.json()

	// @ts-ignore
	timeline.forEach((website) => {
		if (website.meta && website.meta.date) {
			website.meta.date = reformatDate(website.meta.date)
		}
	})

	return {
		timeline
	}
}
